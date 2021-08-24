window.__require=function t(e,o,i){function n(s,r){if(!o[s]){if(!e[s]){var c=s.split("/");if(c=c[c.length-1],!e[c]){var l="function"==typeof __require&&__require;if(!r&&l)return l(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+s+"'")}s=c}var p=o[s]={exports:{}};e[s][0].call(p.exports,function(t){return n(e[s][1][t]||t)},p,p.exports,t,e,o,i)}return o[s].exports}for(var a="function"==typeof __require&&__require,s=0;s<i.length;s++)n(i[s]);return n}({Basket_ts:[function(t,e,o){"use strict";cc._RF.push(e,"3b689q5lqZKKrjrA1dDsq9k","Basket_ts");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),a=this&&this.__decorate||function(t,e,o,i){var n,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,o,s):n(e,o))||s);return a>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=t("./DragDropTouch_ts"),r=t("./GameManager_ts"),c=t("./UI_Manager_ts"),l=cc._decorator,p=l.ccclass,d=l.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.collisionManager=null,e.stayedNodeExited=!0,e.StayedAnimalNode=null,e.ItemClass=null,e.UIManagerScript=null,e.myLabel=null,e.BasketHolderNodes=[],e.myOtherBasketLabel=null,e}return n(e,t),e.prototype.onLoad=function(){this.CollisionActivation()},e.prototype.CollisionActivation=function(){this.collisionManager=cc.director.getCollisionManager(),this.collisionManager.enabled=!0},e.prototype.onCollisionStay=function(t,e){if("Item"==t.node.group)if(this.stayedNodeExited){if(this.ItemClass=t.node.getComponent(s.default),null!=this.ItemClass&&this.ItemClass.canStartCollisionLocally&&(this.ItemClass.isOnContainer=!0,console.log("item collided! "+t.node.name),!this.ItemClass.canDrag)){if(console.log("item collided! "+t.node.name),c.default.questionNo>=2){var o=this.ItemClass.MyChildSeparateItems[0],i=this.ItemClass.MyChildSeparateItems[1];o.parent=this.BasketHolderNodes[0],i.parent=this.BasketHolderNodes[1],o.setPosition(cc.Vec2.ZERO),i.setPosition(cc.Vec2.ZERO),o.active=!0,i.active=!0,t.node.parent=e.node.getChildByName("Holder"),t.node.setPosition(cc.Vec2.ZERO),this.ItemClass.MySprite.enabled=!1,this.ItemClass.node.opacity=0}else t.node.parent=e.node.getChildByName("Holder"),t.node.setPosition(cc.Vec2.ZERO);this.ItemClass.MyShadowNode.active=!0,r.default.currentlyFilledContainers.push(e.node),this.TotalItemInsertedLogic(),this.StayedAnimalNode=t.node,this.ItemClass.stopEvents=!0,this.stayedNodeExited=!1}}else this.ResetTheNodeIntoBasket(t.node,e.node)},e.prototype.onCollisionExit=function(t){if("Item"==t.node.group){null!=this.StayedAnimalNode&&this.StayedAnimalNode.name==t.node.name&&(null!=this.ItemClass&&(this.ItemClass.isOnContainer=!1,this.ItemClass.MyShadowNode.active=!1),console.log("the node got exited! "+t.node.name),this.ItemClass=null,this.StayedAnimalNode=null,this.stayedNodeExited=!0);var e=t.node.getComponent(s.default);e.isOnContainer=!1,console.log("Other Get exited normally "+e.node.name)}},e.prototype.ResetTheNodeIntoBasket=function(t,e){if(null!=this.StayedAnimalNode&&this.StayedAnimalNode.name==t.name&&!this.ItemClass.canDrag&&this.ItemClass.canStartCollisionLocally)if(this.ItemClass.isOnContainer=!0,c.default.questionNo>=2){var o=this.ItemClass.MyChildSeparateItems[0],i=this.ItemClass.MyChildSeparateItems[1];o.parent=this.BasketHolderNodes[0],i.parent=this.BasketHolderNodes[1],o.setPosition(cc.Vec2.ZERO),i.setPosition(cc.Vec2.ZERO),o.active=!0,i.active=!0,t.parent=e.getChildByName("Holder"),t.setPosition(cc.Vec2.ZERO),this.ItemClass.MySprite.enabled=!1,this.ItemClass.node.opacity=0}else t.parent=e.getChildByName("Holder"),t.setPosition(cc.Vec2.ZERO)},e.prototype.TotalItemInsertedLogic=function(){c.default.ItemInsertedCount++,c.default.ItemInsertedCount>0&&(this.UIManagerScript.InteractiveButtons[0].interactable=!0,this.UIManagerScript.InteractiveButtons[0].node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame=this.UIManagerScript.InteractiveButtonSpriteFrames[1]),c.default.ItemInsertedCount>=2&&(this.UIManagerScript.InteractiveButtons[1].interactable=!0,this.UIManagerScript.InteractiveButtons[1].node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame=this.UIManagerScript.InteractiveButtonSpriteFrames[1])},a([d(c.default)],e.prototype,"UIManagerScript",void 0),a([d(cc.Label)],e.prototype,"myLabel",void 0),a([d(cc.Node)],e.prototype,"BasketHolderNodes",void 0),a([d(cc.Label)],e.prototype,"myOtherBasketLabel",void 0),a([p],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./DragDropTouch_ts":"DragDropTouch_ts","./GameManager_ts":"GameManager_ts","./UI_Manager_ts":"UI_Manager_ts"}],DragDropTouch_ts:[function(t,e,o){"use strict";cc._RF.push(e,"93737gFLSVDoYxypyAgVoLq","DragDropTouch_ts");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),a=this&&this.__decorate||function(t,e,o,i){var n,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,o,s):n(e,o))||s);return a>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=t("./UI_Manager_ts"),r=cc._decorator,c=r.ccclass,l=r.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.canDrag=!0,e.initialDropLocation=null,e.isOnContainer=!1,e.collisionManager=null,e.canStartCollisionLocally=null,e.PreviousParentNode=null,e.stopEvents=!1,e.oneTimePlayAudio=!0,e.oneTimePlayDropAudioInSameBox=!0,e.touchIsEnded=!1,e.oneTime=!1,e.CurrentDragHolderNode=null,e.MyShadowNode=null,e.myLabelNode=null,e.MyChildSeparateItems=[],e.previousChildParent=null,e.MySprite=null,e}return n(e,t),e.prototype.onLoad=function(){this.PreviousParentNode=this.node.parent,this.canStartCollisionLocally=!0,this.CollisionActivation(),this.initialDropLocation=this.node.position,this.EventsBinding()},e.prototype.EventsBinding=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.EventsDragDropCallback,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.EventsDragDropCallback,this),this.node.on(cc.Node.EventType.TOUCH_END,this.EventsDragDropCallback,this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.EventsDragDropCallback,this)},e.prototype.EventsDragDropCallback=function(t){if(!this.stopEvents){if("touchstart"==t.type&&0==t.getID()){this.myLabelNode.node.parent.active=!1,this.canDrag=!0,this.canStartCollisionLocally=!0;var e=this.node.parent.convertToWorldSpaceAR(this.node.position),o=this.CurrentDragHolderNode.convertToNodeSpaceAR(e);this.node.parent=this.CurrentDragHolderNode,this.node.setPosition(o),t.stopPropagationImmediate=!0}"touchmove"==t.type&&this.canDrag&&0==t.getID()&&(t.currentTarget.x+=t.getDelta().x,t.currentTarget.y+=t.getDelta().y,this.oneTimePlayAudio&&(this.oneTimePlayAudio=!1)),"touchend"!=t.type&&"touchcancel"!=t.type||0==t.getID()&&(this.oneTimePlayDropAudioInSameBox=!0,this.canDrag=!1,this.isOnContainer,this.oneTime=!0,this.oneTimePlayAudio=!0,this.touchIsEnded=!0)}},e.prototype.ChangeOpacity=function(t,e){e.opacity=t},e.prototype.ResetLocation=function(){if(s.default.questionNo>=2)for(var t=0;t<this.MyChildSeparateItems.length;t++)this.MyChildSeparateItems[t].parent=this.previousChildParent,this.MyChildSeparateItems[t].active=!1;this.node.opacity=255,this.node.parent=this.PreviousParentNode,this.MySprite.enabled=!0,this.node.setPosition(cc.Vec2.ZERO),this.MyShadowNode.active=!1,this.canStartCollisionLocally=!1,this.myLabelNode.node.parent.active=!0,this.stopEvents=!1},e.prototype.CollisionActivation=function(){this.collisionManager=cc.director.getCollisionManager(),this.collisionManager.enabled=!0},e.prototype.onCollisionStay=function(t){"Outside"==t.node.group&&(this.canDrag||!this.oneTime||this.isOnContainer||(this.ResetLocation(),console.log("outside got touched!"),this.oneTime=!1))},a([l(cc.Node)],e.prototype,"CurrentDragHolderNode",void 0),a([l(cc.Node)],e.prototype,"MyShadowNode",void 0),a([l(cc.Label)],e.prototype,"myLabelNode",void 0),a([l(cc.Node)],e.prototype,"MyChildSeparateItems",void 0),a([l(cc.Node)],e.prototype,"previousChildParent",void 0),a([l(cc.Sprite)],e.prototype,"MySprite",void 0),a([c],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./UI_Manager_ts":"UI_Manager_ts"}],GameManager_ts:[function(t,e,o){"use strict";cc._RF.push(e,"51fe3fERzZPI4ZgPEUilSog","GameManager_ts");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),a=this&&this.__decorate||function(t,e,o,i){var n,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,o,s):n(e,o))||s);return a>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=t("./Basket_ts"),r=t("./DragDropTouch_ts"),c=t("./UI_Manager_ts"),l=!1,p=cc._decorator,d=p.ccclass,u=p.property,h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.feedbackCounterLimit=2,e.UI_ManagerScript=null,e.BasketLabels=new Map,e.ButtonLabels=new Map,e.ProductItemSprites=new Map,e.CorrectFeedback=new Map,e.WrongFeedback=new Map,e.EyesPositions=new Map,e.AllProductsSprites=[],e.AllEyes=[],e.AllEyes_LV3=[],e.AllBasketLabels=[],e.AllBasketLabels_LV3=[],e.AllButtonLabels=[],e.FarmerAnimationComp=null,e.GameCompletionNode=null,e.AllEyesFrame=[],e.BasketHolders=[],e.feedbackLabelCounter=0,e.whichAudioSectionIsPlaying=null,e.oneTimePlayFarmerAnim=!1,e.BottomsVo=[],e.AllAudiosMapped=new Map,e.AudioId=0,e}var o;return n(e,t),o=e,e.prototype.onLoad=function(){this.LoadingEveryDetails()},e.prototype.start=function(){},e.prototype.update=function(){l&&this.AudioPlayingOrNotLogic()},e.prototype.LabelsAndItemsChanger=function(t){var e=0;if(t>=2){console.log("Coming under Level 3"+t);var o=this.BasketLabels.get(t);for(e=0;e<o.length;e++)this.AllBasketLabels_LV3[e].string=o[e];var i=this.ProductItemSprites.get(t);for(e=0;e<i.length;e++)this.UI_ManagerScript.TheProductsNode_LV3[e].getComponent(cc.Sprite).spriteFrame=i[e];var n=this.EyesPositions.get(t);for(e=0;e<n.length;e++)this.AllEyes_LV3[e].setPosition(n[e])}else{for(o=this.BasketLabels.get(t),e=0;e<o.length;e++)this.AllBasketLabels[e].string=o[e];for(i=this.ProductItemSprites.get(t),e=0;e<i.length;e++)this.UI_ManagerScript.TheProductsNode[e].getComponent(cc.Sprite).spriteFrame=i[e];for(n=this.EyesPositions.get(t),e=0;e<n.length;e++)this.AllEyes[e].setPosition(n[e])}var a=this.ButtonLabels.get(t);for(e=0;e<a.length;e++)this.AllButtonLabels[e].string=a[e];console.log("Now change the Label dude!")},e.prototype.LoadingEveryDetails=function(){for(var t=[],e=0;e<3;e++)0==e&&(t.push("Roots"),t.push("Stems"),this.BasketLabels.set(e,t),(t=[]).push("Onion and Ginger"),t.push("Radish and Turnip"),this.ButtonLabels.set(e,t),(t=[]).push(this.AllProductsSprites[0]),t.push(this.AllProductsSprites[1]),this.ProductItemSprites.set(e,t),(t=[]).push("Yay! Radish and turnip are considered roots because they\ngrow under the ground and absorb large amounts of\nnutrients from the soil."),t.push("Onion and ginger are underground parts of the stem that\nhave thickened to store food."),this.CorrectFeedback.set(e,t),(t=[]).push("Oops! Onion and ginger are not roots.They have nodes,\ninternodes, buds and scale leaves."),t.push("Radish and turnip are not stems as they are not derived\nfrom stem tissues."),this.WrongFeedback.set(e,t),(t=[]).push(new cc.Vec2(-21.366,-17.661)),t.push(new cc.Vec2(18.895,-16.498)),t.push(new cc.Vec2(-29.229,-1.451)),t.push(new cc.Vec2(12.754,-15.764)),this.EyesPositions.set(e,t),(t=[]).push(this.BottomsVo[0]),t.push(this.BottomsVo[1]),t.push(this.BottomsVo[2]),t.push(this.BottomsVo[3]),this.AllAudiosMapped.set(e,t)),1==e&&((t=[]).push("Vegetables"),t.push("Fruits"),this.BasketLabels.set(e,t),(t=[]).push("Okra and Tomato"),t.push("Beet and Cauliflower"),this.ButtonLabels.set(e,t),(t=[]).push(this.AllProductsSprites[2]),t.push(this.AllProductsSprites[3]),this.ProductItemSprites.set(e,t),(t=[]).push("Yay! Beet and cauliflower are considered vegetables\nbecause they develop from other parts of a plant rather\nthan the ovary and do not contain seeds."),t.push("Okra and tomato are considered fruits because they are\nseed-bearing structures that develop from the ovary of a\nflowering plant."),this.CorrectFeedback.set(e,t),(t=[]).push("Uh-oh! Okra and tomato are not vegetables. They contain\nseeds and are developed from the ovary."),t.push("Beet and cauliflower are not fruits. They do not contain\nseeds and are developed from other parts of a plant\nrather than the ovary."),this.WrongFeedback.set(e,t),(t=[]).push(new cc.Vec2(-28.511,10.324)),t.push(new cc.Vec2(14.132,-12.33)),t.push(new cc.Vec2(-25.019,-18.924)),t.push(new cc.Vec2(11.199,-4.619)),this.EyesPositions.set(e,t),(t=[]).push(this.BottomsVo[4]),t.push(this.BottomsVo[5]),t.push(this.BottomsVo[6]),t.push(this.BottomsVo[7]),this.AllAudiosMapped.set(e,t)),2==e&&((t=[]).push("Roots"),t.push("Leaves"),t.push("Stems"),t.push("Flowers"),this.BasketLabels.set(e,t),(t=[]).push("Potato and Broccoli"),t.push("Carrot and Cabbage"),this.ButtonLabels.set(e,t),(t=[]).push(this.AllProductsSprites[4]),t.push(this.AllProductsSprites[5]),t.push(this.AllProductsSprites[6]),t.push(this.AllProductsSprites[7]),t.push(this.AllProductsSprites[8]),t.push(this.AllProductsSprites[9]),this.ProductItemSprites.set(e,t),(t=[]).push("That\u2019s right! Carrot is an enlarged root that grows below\nthe soil surface, and can absorb nutrients from the soil."),t.push("Cabbages are dense, overlapped leaves of a plant  that are\nconsumed as food."),t.push("Potato tubers are thickened stems that have\nbuds which sprout stems and leaves."),t.push("Broccoli is a vegetable that is the flower part of the plant."),this.CorrectFeedback.set(e,t),(t=[]).push("Potato and broccoli are not roots or leaves of plants.\nThey are not derived from the tissues constituting\nthe roots or leaves."),t.push("Carrot and cabbage are not stems or flowers of plants as they\nare not derived from those plant tissues."),this.WrongFeedback.set(e,t),(t=[]).push(new cc.Vec2(-28.511,2.549)),t.push(new cc.Vec2(14.645,-15.75)),t.push(new cc.Vec2(-26.438,-1.598)),t.push(new cc.Vec2(16.73,.039)),t.push(new cc.Vec2(0,6.55)),t.push(new cc.Vec2(0,-19.829)),t.push(new cc.Vec2(2.872,-2.703)),t.push(new cc.Vec2(1.814,1.451)),this.EyesPositions.set(e,t),(t=[]).push(this.BottomsVo[8]),t.push(this.BottomsVo[9]),t.push(this.BottomsVo[10]),t.push(this.BottomsVo[11]),t.push(this.BottomsVo[12]),t.push(this.BottomsVo[13]),this.AllAudiosMapped.set(e,t))},e.prototype.AnswerLogicButtonFun=function(){var t=null,e=null;if(null!=o.currentlyFilledContainers&&o.currentlyFilledContainers.length>0){for(var i=0;i<o.currentlyFilledContainers.length;i++){var n=o.currentlyFilledContainers[i].getComponent(s.default);if(null!=n.StayedAnimalNode){var a=n.StayedAnimalNode.getComponent(cc.Sprite).spriteFrame.name;n.StayedAnimalNode.getComponent(r.default).stopEvents=!0}c.default.questionNo<2?e=n.myLabel.string:c.default.questionNo>=2&&(e=n.myLabel.string+n.myOtherBasketLabel.string),null!=n.StayedAnimalNode&&(console.log("answer logic is performed!"+a),a.toLowerCase()==e.toLowerCase()?(t=!0,console.log("correct Answer!")):(t=!1,console.log("wrong Answer!")),console.log("Answer logic get called!"))}this.oneTimePlayFarmerAnim=!0,t?(c.default.questionNo<2&&(this.feedbackCounterLimit=2),c.default.questionNo>=2&&(this.feedbackCounterLimit=4),this.FeedBackLogic("Correct")):((c.default.questionNo<2||c.default.questionNo>=2)&&(this.feedbackCounterLimit=2),this.FeedBackLogic("Wrong")),this.UI_ManagerScript.InteractiveButtons[1].interactable=!1,this.UI_ManagerScript.InteractiveButtons[1].node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame=this.UI_ManagerScript.InteractiveButtonSpriteFrames[1],o.currentlyFilledContainers.splice(0,o.currentlyFilledContainers.length),console.log("total containers: "+o.currentlyFilledContainers.length)}},e.prototype.FeedBackLogic=function(t){"correct"==t.toLowerCase()&&(this.feedbackLabelCounter=0,(new cc.Tween).target(this.UI_ManagerScript.GamePlayButtonNode).parallel(cc.fadeTo(.5,100),cc.moveTo(1.5,new cc.Vec2(0,-400))).then(cc.callFunc(this.FeedbackCorrectCallbacks,this)).start()),"wrong"==t.toLowerCase()&&(this.feedbackLabelCounter=0,(new cc.Tween).target(this.UI_ManagerScript.GamePlayButtonNode).parallel(cc.fadeTo(.5,100),cc.moveTo(1.5,new cc.Vec2(0,-400))).then(cc.callFunc(this.FeedbackWrongCallbacks,this)).start())},e.prototype.ResetEyes=function(){for(var t=0;t<this.AllEyes.length;t++)this.AllEyes[t].getComponent(cc.Sprite).spriteFrame=this.AllEyesFrame[0]},e.prototype.FeedbackCorrectCallbacks=function(){this.oneTimePlayFarmerAnim&&this.FarmerAnimationComp.play("HappyFarmer_anim"),this.oneTimePlayFarmerAnim=!1,this.FeedbackLabel.node.parent.parent.setPosition(new cc.Vec2(0,-400)),this.FeedbackLabel.node.parent.parent.active=!0;var t=this.CorrectFeedback.get(c.default.questionNo);this.FeedbackLabel.string=t[this.feedbackLabelCounter],(new cc.Tween).target(this.FeedbackLabel.node.parent.parent).then(cc.moveTo(1,cc.Vec2.ZERO)).then(cc.callFunc(this.PlayFeedbackCorrectAudios,this)).start();for(var e=0;e<this.AllEyes.length;e++)this.AllEyes[e].getComponent(cc.Sprite).spriteFrame=this.AllEyesFrame[1]},e.prototype.PlayFeedbackCorrectAudios=function(){this.whichAudioSectionIsPlaying="correct";var t=this.AllAudiosMapped.get(c.default.questionNo);this.AudioId=cc.audioEngine.playEffect(t[this.feedbackLabelCounter],!1),this.AudioFinishCallback(this.AudioId)},e.prototype.PlayFeedbackWrongAudios=function(){this.whichAudioSectionIsPlaying="wrong";var t=this.AllAudiosMapped.get(c.default.questionNo);this.AudioId=cc.audioEngine.playEffect(t[t.length-2+this.feedbackLabelCounter],!1),this.AudioFinishCallback(this.AudioId)},e.prototype.AudioFinishCallback=function(t){cc.audioEngine.setFinishCallback(t,function(){l=!0,console.log("Audio is finished!"+t)})},e.prototype.AudioPlayingOrNotLogic=function(){cc.audioEngine.AudioState.STOPPED&&(console.log("Music is Not Playing!"),this.feedbackLabelCounter++,this.feedbackLabelCounter<this.feedbackCounterLimit?this.SwipeDownExplainBoard():"correct"==this.whichAudioSectionIsPlaying?(this.NextButton.node.active=!0,(new cc.Tween).target(this.NextButton.node).then(cc.moveTo(.8,new cc.Vec2(0,-340))).start()):(this.TryAgainButton.node.active=!0,(new cc.Tween).target(this.TryAgainButton.node).then(cc.moveTo(.8,new cc.Vec2(0,-340))).start()),l=!1)},e.prototype.FeedbackWrongCallbacks=function(){this.oneTimePlayFarmerAnim&&this.FarmerAnimationComp.play("AngryFarmer_anim"),this.oneTimePlayFarmerAnim=!1,this.FeedbackLabel.node.parent.parent.setPosition(new cc.Vec2(0,-400)),this.FeedbackLabel.node.parent.parent.active=!0;var t=this.WrongFeedback.get(c.default.questionNo);this.FeedbackLabel.string=t[this.feedbackLabelCounter],(new cc.Tween).target(this.FeedbackLabel.node.parent.parent).then(cc.moveTo(1,cc.Vec2.ZERO)).then(cc.callFunc(this.PlayFeedbackWrongAudios,this)).start();for(var e=0;e<this.AllEyes.length;e++)this.AllEyes[e].getComponent(cc.Sprite).spriteFrame=this.AllEyesFrame[2]},e.prototype.SwipeDownExplainBoard=function(){(new cc.Tween).target(this.FeedbackLabel.node.parent.parent).then(cc.moveTo(1,new cc.Vec2(0,-400))).delay(.5).then(cc.callFunc(this.FeedBackCallbackManager,this)).start()},e.prototype.FeedBackCallbackManager=function(){this.feedbackLabelCounter<this.feedbackCounterLimit?"correct"==this.whichAudioSectionIsPlaying?this.FeedbackCorrectCallbacks():this.FeedbackWrongCallbacks():(this.TryAgainButton.node.active=!1,this.TryAgainButton.node.setPosition(new cc.Vec2(0,-480)),this.NextButton.node.active=!1,this.NextButton.node.setPosition(new cc.Vec2(0,-480)))},e.prototype.TryAgainButtonFun=function(){this.ResetEyes(),this.SwipeDownExplainBoard(),this.FarmerIdleAnimPlay()},e.prototype.FarmerIdleAnimPlay=function(){this.FarmerAnimationComp.play("FarmerIdle_Anim")},e.prototype.MoveToNextQuestionLogic=function(){c.default.questionNo++,c.default.questionNo<2?(this.ResetEyes(),this.UI_ManagerScript.ResetButtonLogic(),this.FarmerIdleAnimPlay(),this.SwipeDownExplainBoard(),this.UI_ManagerScript.totalDialogueCount=3,this.UI_ManagerScript.IntroLogic(1,4,"FadeOut")):c.default.questionNo<3?(this.ResetEyes(),this.UI_ManagerScript.ResetButtonLogic(),this.FarmerIdleAnimPlay(),this.SwipeDownExplainBoard(),this.UI_ManagerScript.totalDialogueCount=3,this.UI_ManagerScript.IntroLogic(1,4,"FadeOut"),this.FarmerAnimationComp.node.getChildByName("Farmer").setPosition(cc.Vec2.ZERO),this.BasketHolders[0].active=!1,this.BasketHolders[1].active=!0):(this.UI_ManagerScript.IntroLogic(1,4,"FadeOut"),this.SwipeDownExplainBoard(),this.GameCompletionNode.active=!0)},e.prototype.BackgroundMusicButton=function(){cc.audioEngine.stopMusic()},e.currentlyFilledContainers=[],a([u(c.default)],e.prototype,"UI_ManagerScript",void 0),a([u(cc.SpriteFrame)],e.prototype,"AllProductsSprites",void 0),a([u(cc.Node)],e.prototype,"AllEyes",void 0),a([u(cc.Node)],e.prototype,"AllEyes_LV3",void 0),a([u(cc.Label)],e.prototype,"AllBasketLabels",void 0),a([u(cc.Label)],e.prototype,"AllBasketLabels_LV3",void 0),a([u(cc.Label)],e.prototype,"AllButtonLabels",void 0),a([u(cc.Animation)],e.prototype,"FarmerAnimationComp",void 0),a([u(cc.Label)],e.prototype,"FeedbackLabel",void 0),a([u(cc.Button)],e.prototype,"TryAgainButton",void 0),a([u(cc.Button)],e.prototype,"NextButton",void 0),a([u(cc.Node)],e.prototype,"GameCompletionNode",void 0),a([u(cc.SpriteFrame)],e.prototype,"AllEyesFrame",void 0),a([u(cc.Node)],e.prototype,"BasketHolders",void 0),a([u(cc.AudioClip)],e.prototype,"BottomsVo",void 0),o=a([d],e)}(cc.Component);o.default=h,cc._RF.pop()},{"./Basket_ts":"Basket_ts","./DragDropTouch_ts":"DragDropTouch_ts","./UI_Manager_ts":"UI_Manager_ts"}],ScreenAdaption_ts:[function(t,e,o){"use strict";cc._RF.push(e,"71021IqDdhEJKBb9kTvArYf","ScreenAdaption_ts");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),a=this&&this.__decorate||function(t,e,o,i){var n,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,o,s):n(e,o))||s);return a>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,r=s.ccclass,c=s.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.AllArtBoards=[],e.GamePlayArtBoards=[],e.OutsideNode=null,e.screenWidth=null,e.screenHeight=null,e}return n(e,t),e.prototype.onLoad=function(){this.ArtBoardAdaption()},e.prototype.ArtBoardAdaption=function(){this.screenWidth=this.node.parent.width,this.screenHeight=this.node.parent.height,this.AllArtBoards[0].setPosition(new cc.Vec2(-this.screenWidth,this.AllArtBoards[0].position.y)),this.AllArtBoards[1].setPosition(new cc.Vec2(this.screenWidth,this.AllArtBoards[0].position.y)),this.AllArtBoards[2].setPosition(new cc.Vec2(this.AllArtBoards[2].position.x,-this.screenHeight)),this.OutsideNode.width=4*this.screenWidth,this.OutsideNode.getComponent(cc.BoxCollider).size.width=4*this.screenWidth,this.OutsideNode.height=4*this.screenHeight,this.OutsideNode.getComponent(cc.BoxCollider).size.height=4*this.screenHeight},e.prototype.GamePlayBackgroundAdaption=function(){this.GamePlayArtBoards[0].width=this.screenWidth,this.GamePlayArtBoards[1].width=this.screenWidth,this.GamePlayArtBoards[2].setPosition(new cc.Vec2(this.screenWidth/4-30,this.GamePlayArtBoards[2].position.y))},a([c(cc.Node)],e.prototype,"AllArtBoards",void 0),a([c(cc.Node)],e.prototype,"GamePlayArtBoards",void 0),a([c(cc.Node)],e.prototype,"OutsideNode",void 0),a([r],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],UI_Manager_ts:[function(t,e,o){"use strict";cc._RF.push(e,"9b1ddrOoNlMaZHu76MhcjT7","UI_Manager_ts");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),a=this&&this.__decorate||function(t,e,o,i){var n,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,o,s):n(e,o))||s);return a>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=t("./DragDropTouch_ts"),r=t("./GameManager_ts"),c=cc._decorator,l=c.ccclass,p=c.property,d=!0,u=null,h=null,g=!1,y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.IntroNode=null,e.MenuNode=null,e.IntroDialogue_Sprite=null,e.IntroDialogue_Text=null,e.IntroDialogue_AllSpritesBoard=[],e.DialoguesStoryArt=[],e.TestAudioClip=null,e.IntroDialogueAllText=[],e.totalDialogueCount=0,e.IntroDialoguesSpriteInitialPos=null,e.TheProductsNode=[],e.TheProductsNode_LV3=[],e.InteractiveButtons=[],e.InteractiveButtonSpriteFrames=[],e.GamePlayButtonNode=null,e.GamePlayNode=null,e.TutorialNode=null,e.TutorialAnim=null,e.animState=null,e.GameManagerScript=null,e.CancelButton_Anim=null,e.TopBoardDialoguesVO=[],e}var o;return n(e,t),o=e,e.prototype.onLoad=function(){this.DeactiveButton(),this.IntroDialoguesSpriteInitialPos=this.IntroDialogue_Sprite.node.position,this.TutorialAnim=this.TutorialNode.getComponent(cc.Animation),this.animState=this.TutorialAnim.getAnimationState("Tutorial_anim"),console.log("anim state is: "+this.animState),this.LoadingDialogues()},e.prototype.DeactiveButton=function(){for(var t=0;t<this.InteractiveButtons.length;t++)this.InteractiveButtons[t].interactable=!1},e.prototype.PlayButtonFun=function(){this.MenuNode.active=!1,this.IntroNode.active=!0,this.IntroArtBoardPopUpLogic(.6,this.DialoguesStoryArt[0],new cc.Vec2(0,this.DialoguesStoryArt[0].position.y))},e.prototype.update=function(){g&&this.AudioPlayingOrNotLogic(),d&&this.CheckAnimationIsDone(),u&&(this.TutorialFinishedAfterLogic(),u=!1)},e.prototype.LoadingDialogues=function(){this.IntroDialogueAllText=["Tom, a meticulous farmer, has segregated his farm\nproduce to sell to the grocers.","Bob seems to have toppled all the baskets scattering all\nthe produce.","Help Arya put these edible parts of plants back into\ntheir respective baskets to save Bob from\nthe farmer\u2019s fury.","Help Arya put the edible parts of plants into the\nappropriate baskets."]},e.prototype.IntroLogic=function(t,e,o){this.IntroDialogue_Sprite.node.active=!0,this.IntroDialogue_Text.string=this.IntroDialogueAllText[e-1],this.IntroDialogue_Sprite.spriteFrame=e<=3?this.IntroDialogue_AllSpritesBoard[e-1]:this.IntroDialogue_AllSpritesBoard[0];var i=this.IntroDialogue_Sprite.node;"fadein"==o.toLowerCase()&&(this.IntroDialogue_Sprite.node.opacity=50,this.IntroDialogue_Sprite.node.setPosition(new cc.Vec2(this.IntroDialoguesSpriteInitialPos.x,this.IntroDialoguesSpriteInitialPos.y)),(new cc.Tween).target(i).parallel(cc.moveTo(t,new cc.Vec2(0,i.position.y)),cc.fadeTo(t,255)).then(cc.callFunc(this.DialogueAudioCompletionCheck,this)).start()),"fadeout"==o.toLowerCase()&&(new cc.Tween).target(i).parallel(cc.moveTo(t,new cc.Vec2(40,i.position.y)),cc.fadeTo(t,0)).delay(.5).then(cc.callFunc(this.IntroDialogueCompleteCallback,this)).start()},e.prototype.DialogueAudioCompletionCheck=function(){o.AudioId=cc.audioEngine.playEffect(this.TopBoardDialoguesVO[this.totalDialogueCount-1],!1),this.AudioFinishCallback(o.AudioId)},e.prototype.AudioFinishCallback=function(t){cc.audioEngine.setFinishCallback(t,function(){g=!0,console.log("Audio is finished!"+t)})},e.prototype.AudioPlayingOrNotLogic=function(){cc.audioEngine.AudioState.STOPPED&&(console.log("Music is Not Playing!"),this.totalDialogueCount<=3?this.IntroLogic(1,this.totalDialogueCount,"FadeOut"):h?(this.TutorialNode.active=!1,u=!0):this.TutorialNode.active=!0,g=!1)},e.prototype.IntroArtBoardPopUpLogic=function(t,e,o){e.active=!0,(new cc.Tween).target(e).then(cc.moveTo(t,new cc.Vec2(o.x,o.y))).delay(1).then(cc.callFunc(this.ArtBoardCompleteCallback,this)).start()},e.prototype.ArtBoardCompleteCallback=function(){console.log("Can show dialogue!"),this.totalDialogueCount++,this.IntroLogic(1,this.totalDialogueCount,"FadeIn")},e.prototype.IntroDialogueCompleteCallback=function(){console.log("Dialogue Completed!");var t=null;this.totalDialogueCount<3?(1==this.totalDialogueCount&&(t=new cc.Vec2(0,this.DialoguesStoryArt[1].position.y)),2==this.totalDialogueCount&&(t=new cc.Vec2(this.DialoguesStoryArt[2].position.x,0)),this.IntroArtBoardPopUpLogic(.6,this.DialoguesStoryArt[this.totalDialogueCount],t)):(console.log("All dialogues completed for the story board!"),this.totalDialogueCount++,this.totalDialogueCount<=4&&(this.scheduleOnce(this.GamePlayLogicCallback,1),this.GamePlayNode.active=!0))},e.prototype.GamePlayLogicCallback=function(){this.IntroNode.active=!1,this.IntroLogic(1,this.totalDialogueCount,"FadeIn")},e.prototype.CheckAnimationIsDone=function(){this.TutorialAnim.on("finished",function(t){t.currentTarget==this.animState&&(d=!1,u=!0)},this.TutorialAnim.node)},e.prototype.TutorialFinishedAfterLogic=function(){this.CancelButton_Anim.interactable=!1,h=!0,this.GamePlayButtonNode.setPosition(new cc.Vec2(0,-800)),this.GamePlayButtonNode.opacity=255,this.GamePlayButtonNode.active=!0,(new cc.Tween).target(this.GamePlayButtonNode).then(cc.moveTo(1,cc.Vec2.ZERO)).start(),this.GameManagerScript.LabelsAndItemsChanger(o.questionNo)},e.prototype.ResetButtonLogic=function(){for(var t=0;t<this.TheProductsNode.length;t++)this.TheProductsNode[t].getComponent(s.default).ResetLocation();o.ItemInsertedCount=0,this.InteractiveButtons[0].interactable=!1,this.InteractiveButtons[1].interactable=!1,this.InteractiveButtons[0].node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame=this.InteractiveButtonSpriteFrames[0],this.InteractiveButtons[1].node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame=this.InteractiveButtonSpriteFrames[0]},e.prototype.TutorialCancelButton=function(){d=!1,u=!0,this.TutorialNode.active=!1},e.ItemInsertedCount=0,e.questionNo=0,e.AudioId=null,a([p(cc.Node)],e.prototype,"IntroNode",void 0),a([p(cc.Node)],e.prototype,"MenuNode",void 0),a([p(cc.Sprite)],e.prototype,"IntroDialogue_Sprite",void 0),a([p(cc.Label)],e.prototype,"IntroDialogue_Text",void 0),a([p(cc.SpriteFrame)],e.prototype,"IntroDialogue_AllSpritesBoard",void 0),a([p(cc.Node)],e.prototype,"DialoguesStoryArt",void 0),a([p(cc.AudioClip)],e.prototype,"TestAudioClip",void 0),a([p(cc.Node)],e.prototype,"TheProductsNode",void 0),a([p(cc.Node)],e.prototype,"TheProductsNode_LV3",void 0),a([p(cc.Button)],e.prototype,"InteractiveButtons",void 0),a([p(cc.SpriteFrame)],e.prototype,"InteractiveButtonSpriteFrames",void 0),a([p(cc.Node)],e.prototype,"GamePlayButtonNode",void 0),a([p(cc.Node)],e.prototype,"GamePlayNode",void 0),a([p(cc.Node)],e.prototype,"TutorialNode",void 0),a([p(r.default)],e.prototype,"GameManagerScript",void 0),a([p(cc.Button)],e.prototype,"CancelButton_Anim",void 0),a([p(cc.AudioClip)],e.prototype,"TopBoardDialoguesVO",void 0),o=a([l],e)}(cc.Component);o.default=y,cc._RF.pop()},{"./DragDropTouch_ts":"DragDropTouch_ts","./GameManager_ts":"GameManager_ts"}]},{},["Basket_ts","DragDropTouch_ts","GameManager_ts","ScreenAdaption_ts","UI_Manager_ts"]);