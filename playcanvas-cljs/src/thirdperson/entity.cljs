(ns thirdperson.entity
  (:require
    [applied-science.js-interop :as j]
    [odoyle.rules :as o])
  (:require-macros
    [thirdperson.macros :refer [fnt] :as m]))

(defonce app (delay (j/get js/pc :app)))

(defn vec3
  ([]
   (vec3 0 0 0))
  ([x y z]
   (js/pc.Vec3. x y z)))

(defn pressed-only? [only-required-keys all-keys pressed-keys]
  (let [only-required-keys (if (sequential? only-required-keys) only-required-keys [only-required-keys])
        all-keys (if (sequential? all-keys) all-keys [all-keys])
        only-required-keys (map #(j/get js/pc %) only-required-keys)
        all-keys (map #(j/get js/pc %) all-keys)]
    (= (set only-required-keys)
       (set (filter (set all-keys) pressed-keys)))))

(let [pos (vec3)]
  (defn- walk
    ([dt x z this]
     (walk dt x z this false))
    ([dt x z this backwards]
     (when (or (not (zero? x))
               (not (zero? z)))
       (let [pos (j/call pos :set (* x dt) 0 (* z dt))
             _ (do
                 (-> pos (j/call :normalize) (j/call :scale (j/get this :speed)))
                 (j/call pos :add (j/call-in this [:entity :getPosition])))
             target-y (atom nil)]
         (if backwards
           (reset! target-y (m/get-in! :cameraScript :eulers :x))
           (reset! target-y (+ (m/get-in! :cameraScript :eulers :x) 180)))
         (j/call-in this [:entity :rigidbody :teleport] pos (vec3 0 @target-y 0)))))))

(def rules
  (o/ruleset
    {::player
     [:what
      [::player ::this this]
      [::player ::forward forward]
      [::player ::right right]
      [::player ::pressed-keys pressed-keys]]

     ::move-forward
     [:what
      [::time ::delta dt]
      [::player ::pressed-keys pressed-keys {:then false}]
      [::player ::this this {:then false}]
      [::player ::forward forward {:then false}]
      :when
      (pressed-only? :KEY_W [:KEY_W :KEY_S :KEY_A :KEY_D] pressed-keys)
      :then
      (let [x (j/get forward :x)
            z (j/get forward :z)]
        (walk dt x z this))]

     ::move-backwards
     [:what
      [::time ::delta dt]
      [::player ::pressed-keys pressed-keys {:then false}]
      [::player ::forward forward {:then false}]
      [::player ::this this {:then false}]
      :when
      (pressed-only? :KEY_S [:KEY_W :KEY_S :KEY_A :KEY_D] pressed-keys)
      :then
      (let [x (j/get forward :x)
            z (j/get forward :z)]
        (walk dt x z this true))]

     ::move-left
     [:what
      [::time ::delta dt]
      [::player ::pressed-keys pressed-keys {:then false}]
      [::player ::right right {:then false}]
      [::player ::this this {:then false}]
      :when
      (pressed-only? :KEY_A [:KEY_W :KEY_S :KEY_A :KEY_D] pressed-keys)
      :then
      (let [x (- (j/get right :x))
            z (- (j/get right :z))]
        (walk dt x z this))]

     ::move-right
     [:what
      [::time ::delta dt]
      [::player ::pressed-keys pressed-keys {:then false}]
      [::player ::right right {:then false}]
      [::player ::this this {:then false}]
      :when
      (pressed-only? :KEY_D [:KEY_W :KEY_S :KEY_A :KEY_D] pressed-keys)
      :then
      (let [x (j/get right :x)
            z (j/get right :z)]
        (walk dt x z this))]

     ::move-left-forward
     [:what
      [::time ::delta dt]
      [::player ::pressed-keys pressed-keys {:then false}]
      [::player ::this this {:then false}]
      [::player ::forward forward {:then false}]
      [::player ::right right {:then false}]
      :when
      (pressed-only? [:KEY_W :KEY_A] [:KEY_W :KEY_S :KEY_A :KEY_D] pressed-keys)
      :then
      (let [x (- (j/get forward :x) (j/get right :x))
            z (- (j/get forward :z) (j/get right :z))]
        (walk dt x z this))]

     ::move-right-forward
     [:what
      [::time ::delta dt]
      [::player ::pressed-keys pressed-keys {:then false}]
      [::player ::this this {:then false}]
      [::player ::forward forward {:then false}]
      [::player ::right right {:then false}]
      :when
      (pressed-only? [:KEY_W :KEY_D] [:KEY_W :KEY_S :KEY_A :KEY_D] pressed-keys)
      :then
      (let [x (+ (j/get forward :x) (j/get right :x))
            z (+ (j/get forward :z) (j/get right :z))]
        (walk dt x z this))]

     ::move-left-backwards
     [:what
      [::time ::delta dt]
      [::player ::pressed-keys pressed-keys {:then false}]
      [::player ::forward forward {:then false}]
      [::player ::right right {:then false}]
      [::player ::this this {:then false}]
      :when
      (pressed-only? [:KEY_S :KEY_A] [:KEY_W :KEY_S :KEY_A :KEY_D] pressed-keys)
      :then
      (let [x (+ (j/get forward :x) (j/get right :x))
            z (+ (j/get forward :z) (j/get right :z))]
        (walk dt x z this true))]

     ::move-right-backwards
     [:what
      [::time ::delta dt]
      [::player ::pressed-keys pressed-keys {:then false}]
      [::player ::forward forward {:then false}]
      [::player ::right right {:then false}]
      [::player ::this this {:then false}]
      :when
      (pressed-only? [:KEY_S :KEY_D] [:KEY_W :KEY_S :KEY_A :KEY_D] pressed-keys)
      :then
      (let [x (- (j/get forward :x) (j/get right :x))
            z (- (j/get forward :z) (j/get right :z))]
        (walk dt x z this true))]

     ::jump
     [:what
      [::time ::delta dt]
      [::player ::pressed-keys pressed-keys {:then false}]
      [::player ::this this {:then false}]
      :when
      (pressed-only? :KEY_SPACE :KEY_SPACE pressed-keys)
      :then
      (j/call-in this [:entity :rigidbody :applyImpulse] 0 50 0)]}))

(defonce *session
  (atom (reduce o/add-rule (o/->session) rules)))

(defn pressed? [key]
  (j/call-in @app [:keyboard :isPressed] (j/get js/pc key)))

(defn find-by-name [name]
  (j/call-in @app [:root :findByName] name))

(defn create-script [script-name {:keys [attrs init update]}]
  (let [script (j/call js/pc :createScript (name script-name))]
    (doseq [[k v] attrs]
      (j/call-in script [:attributes :add] (name k) (clj->js v)))
    (some->> init (j/assoc-in! script [:prototype :initialize]))
    (some->> update (j/assoc-in! script [:prototype :update]))))

(defn upsert
  ([session [id attr f]]
   (upsert session id attr f))
  ([session id attr->value]
   (reduce-kv (fn [session attr f]
                (upsert session id attr f))
              session attr->value))
  ([session id attr f]
   (let [attr* (-> attr name keyword)
         value (f (-> (o/query-all session id) first attr*))]
     (->> (#'o/get-alpha-nodes-for-fact session (:alpha-node session) id attr value true)
          (#'o/upsert-fact session id attr value)))))

(defn init []
  (create-script :playerMovement
                 {:attrs {:speed {:type "number"
                                  :default 0.09}}
                  :init (fnt
                          (let [camera (find-by-name "Camera")
                                app @app]
                            (swap! *session
                                   (fn [session]
                                     (-> session
                                         (o/insert ::player {::this this
                                                             ::pressed-keys #{}})
                                         o/fire-rules)))
                            (j/call-in app [:keyboard :on] "keydown"
                                       (fn [e]
                                         (swap! *session
                                                (fn [session]
                                                  (-> session
                                                      (upsert ::player ::pressed-keys #(conj % (j/get e :key)))
                                                      o/fire-rules))))
                                       this)
                            (j/call-in app [:keyboard :on] "keyup"
                                       (fn [e]
                                         (swap! *session
                                                (fn [session]
                                                  (-> session
                                                      (upsert ::player ::pressed-keys #(disj % (j/get e :key)))
                                                      o/fire-rules))))
                                       this)
                            (m/set! :cameraScript (j/get-in camera [:script :cameraMovement]))))
                  :update (fnt
                            (swap! *session #(-> %
                                                 (o/insert ::player {::forward (m/get-in! :entity :forward)
                                                                     ::right (m/get-in! :entity :right)})
                                                 (o/insert ::time {::delta dt})
                                                 o/fire-rules)))}))
