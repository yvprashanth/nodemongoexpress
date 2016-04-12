var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var funnelModel = new Schema({
    id: { type: Date},
    offerDisplayed: { type: String },
    offerClicked: {type: String },
    wsMigLanding: {type: String},
    wsMigLandingContinuePurchase: {type: String},
    workspacemailbox : {type: String },
    wsMailboxsuccessfullyTransitionedToCart : {type: String },
    rescheduleModalClicked : {type: String },
    rescheduleModalUpdate : {type: String },
    migJsFrameLoaded : {type: String }
});

module.exports= mongoose.model('Funnel', funnelModel);
