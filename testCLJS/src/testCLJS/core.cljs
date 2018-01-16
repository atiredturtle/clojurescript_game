(ns testCLJS.core)
(enable-console-print!)

(def canvas (.getElementById js/document "myCanvas"))
(def ctx (.getContext canvas "2d"))

(def player 
    { :x 100
    , :y 100
    , :vx 4 
    , :vy 0 
    , :width 20 
    , :height 20 
    , :color "red"
    }
)

(defn drawObject[obj] 
    (let [{:keys [x y width height color]} obj]
        (set! (.-fillStyle ctx) color)
        (.fillRect ctx x y width height)))

(defn moveObject[obj]
     (let [{:keys [x y vx vy]} obj]
        (assoc obj :x (+ x vx) :y (+ y vy))))

; (atom gameState) 

(defn mainLoop[]
    ; (set! (.-fillStyle ctx) "black")
    ; (set! (.-width canvas)  (.-innerWidth js/window))
    ; (set! (.-height canvas) (.-innerHeight js/window))
    ; (.fillRect ctx 0 0 (.-width canvas) (.-height canvas))

    ; (drawObject player)
    ; (set! player (moveObject player))
    ; (println player)

    ; (swap! (updateGameState @gameState)) ; example DELETE ME
)

(defn keyDownHandler[e]
    (js/alert e.keyCode))

(js/setInterval mainLoop 10)
; (js/addEventListener "keydown" keyDownHandler)