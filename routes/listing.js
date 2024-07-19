const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const Listing = require("../models/listing.js")
const { isLoggedIn, isOwner , validateListing } = require("../middleware.js")
const listingController = require("../controllers/listings.js");
const multer = require("multer");

const{storage} = require("../cloudConfig.js");
const upload = multer({ storage })



router.route("/")
.get( wrapAsync(listingController.index))
.post(isLoggedIn, upload.single('listing[image]'), validateListing,
 wrapAsync(listingController.createListing)
)


//NEW ROUTE -- CREATE
router.get("/new", isLoggedIn,listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner, upload.single('listing[image]') ,validateListing,wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

//Edit Route
router.get("/:id/edit", isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;
// //INDEX ROUTE
// router.get("/", wrapAsync(listingController.index));

// //SHOW ROUTE-READ
// router.get("/:id", wrapAsync(listingController.showListing));

// //Create Route
// router.post("/",isLoggedIn, validateListing,  wrapAsync(listingController.createListing)
// );

// // Assuming the multer setup is correct elsewhere in your code
// router.post("/", upload.single("listing[image]"), (req, res) => {
//     res.send(req.file);
// });

//Update Route
//router.put("/:id",isLoggedIn, isOwner ,validateListing,  wrapAsync(listingController.updateListing));

//DELETE REQUEST
//router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

