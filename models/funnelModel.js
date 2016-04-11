var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var funnelModel = new Schema({
    offerDisplayed: { type: Number },
    offerClicked: {type: Number },
    wsMigLanding: {type: Number},
    wsMigLandingContinuePurchase: {type: Number}
    workspacemailbox : {type: Number },
    wsMailboxsuccessfullyTransitionedToCart : {type: Number },
    rescheduleModalClicked : {type: Number },
    rescheduleModalUpdate : {type: Number }
});

module.exports= mongoose.model('Book', bookModel);
