var aws = require('aws-sdk');
var ses = new aws.SES({ region: 'us-west-2' });
var bby = require('bestbuy')();

//SKU of the three Nintendo Switches at Bestbuy
const greySku = 6364253
const redBlueSku = 6364255
const acSku = 6401728

//URL of the three Nintendo Switches at Bestbuy
const grey_url = "https://www.bestbuy.com/site/nintendo-switch-32gb-console-gray-joy-con/6364253.p?skuId=6364253"
const redBlueUrl = "https://www.bestbuy.com/site/nintendo-switch-32gb-console-neon-red-neon-blue-joy-con/6364255.p?skuId=6364255"
const acUrl = "https://www.bestbuy.com/site/nintendo-switch-animal-crossing-new-horizons-edition-32gb-console-multi/6401728.p?skuId=6401728"

//Device Name
const grey = "Grey"
const redBlue = "Red & Blue"
const ac = "Animal Crossing"

//AWS SES Emails
const sourceEmailAddr = "email@gmail.com";
const destinationEmailAddrs = ["email0@gmail.com", "email@gmail.edu", "email@gmail.com"];

function checkSwitch(sku, url, name){
    let zipcode = 98056

    bby.realTimeAvailability(sku, {postalCode: zipcode})
        .then((data) => {
            console.log(name + " Nintendo Switch:")
            console.log("-----------------")
            if(data.stores.length > 0) {
                let params = {
                    Destination: {
                        ToAddresses: destinationEmailAddrs
                    },
                    Message: {
                        Body: {
                            Text: { Data: url }
                        },
                        Subject: { Data: name + " Nintendo Switch is available!" }
                    },
                    Source: sourceEmailAddr
                };
                ses.sendEmail(params, function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("email sent")
                    }
                });
                console.log(url)
            } else {
                console.log(name + " Nintendo Switch is not available in the " + zipcode + " area.")
            }
            console.log()
        })
        .catch((err) => {
            console.warn(err)
        })
}

console.log("Starting Script...")
setInterval(function(){checkSwitch(greySku, grey_url, grey)}, 60000)
setInterval(function(){checkSwitch(redBlueSku, redBlueUrl, redBlue)}, 60000)
setInterval(function(){checkSwitch(acSku, acUrl, ac)}, 60000)