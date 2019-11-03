# To Do List

## Requirements
- [x] As a user I can visualise images retrieved via public URL’s in a gallery page.
- [x] As a user I can filter images based on their content (i.e. people, plants, chairs, windows etc).
- [ ] As a user I can select one of the images and blur parts of this image (i.e a persons face) and
download the edited image.

## Structure
- [x] Set up React components for this Project
    The main components you want to focus on will be...
    - [x] Header (Will only contain the title of the project)
    - [x] SearchForm (Will consist of an input and a button)
    - [x] ImageList
    - [x] Image
    - [x] Footer
     
## Design
- [x] Set up SCSS work environment for styling
    - [x] Install node-sass
    - [x] Set up SCSS project folders

- [x] Style components
    - [x] Style Header
    - [x] Style ImageList
    - [x] Style base elements
    - [x] Style grid layout
    - [x] Style Footer

### Design considerations
 - What's your MVP? Uploading, searching for and viewing images based on a description of the image.
 - The design should look professional and complement the design style that HELIX RE are using currently.
 - The application should be as simple and easy to use as possible to use, so try to keep the features to a minimum.


## Logic and Data
- [x] Fetch JSON data from the Google Vision API.
- [x] From this data, for each image reasponse, create an object containing URL, array of labels and ID.
- [x] Send the object to state. 

## ***As a user I can...***

## ... upload an image for this to be processed and labelled.
- [ ] Upload an image to a project folder (for POC only - this will eventually be replaced with a back end e.g. MongoDB).
- [ ] Once uploaded, add the images url to the array of image urls in data.js

## ... add my own labels to images that I upload.

## ... filter images based on their content (i.e. people, plants, chairs, windows etc).
- [x] On search submit, cycle through the array of objects, add any images that have a label matching the search term to the ImageList.
- [x] Images displayed are based only on searchText state value.
    - [x] If searchText state is '' then show nothing.
    - [x] Otherwise show images with labels matching searchText state.

## ... select one of the images and blur parts of this image (i.e. a persons face) and download the edited image.
- [x] Select any of the returned search images to display as main image before you can...
- [ ] Click a button to automatically identify faces in image.
- [ ] Blur faces in an image.
- [ ] Download the edited image.