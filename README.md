This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Installation

After cloning this project, you need to import dependencies using [NPM](https://www.npmjs.com/).

```sh
$ npm i
```

Create a file for environment variables named `.env.local` and set its contents to

```
REACT_APP_GOOGLE_VISION_API_KEY=<your_api_key>
```

Start the app with the following command. Your browser should automatically open a new tab on [http://localhost:3000](http://localhost:3000).

```sh
$ npm start
```

## Notes

#### I've managed to add image data to state and render these to the gallery, completing the first requirement: 
- As a user I can visualise images retrieved via public URL’s in a gallery page.

#### Next I would need to make adjustments to achieve the second requirement:
-  As a user I can filter images based on their content (i.e. people, plants, chairs, windows etc).
##### To do this, I would 
- use the form to update local searchText state and pass this back up to App.
 - Then I would pass this data down as props to ImageList and filter the 'images' state for objects where indexOf searchText is greater than -1. 
    - This should render only specific images to the page as, in an attempt to not throw too wide a net, I've restricted the number of labels retrieved from the Vision API to 10.

#### Finally would be my third requirement:
- As a user I can select one of the images and blur parts of this image (i.e a persons face) and
##### Considerations for this
- The google vision API can respond with face detection data, containing coordinates of face 'landmarks' on the image. I would use these coordinates along with an external library to target and blur/pixelate that specific area. I would need to investigate options regarding this to make sure that a well maintained library is used for this task


