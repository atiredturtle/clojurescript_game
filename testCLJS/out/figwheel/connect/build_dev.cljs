(ns figwheel.connect.build-dev (:require [figwheel.client] [figwheel.client.utils] [testCLJS.core]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

