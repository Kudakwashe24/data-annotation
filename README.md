# VGG Image Annotator

VGG Image Annotator (VIA) is an image annotation tool that can be used to define 
regions in an image and create textual descriptions of those regions. VIA is an 
open source project developed at the [Visual Geometry Group](http://www.robots.ox.ac.uk/~vgg/) 
and released under the BSD-2 clause license. This work is supported by EPSRC programme grant 
Seebibyte: Visual Search for the Era of Big Data ([EP/M013774/1](http://www.seebibyte.org/index.html)).
Visit the [VGG software page](http://www.robots.ox.ac.uk/~vgg/software/via/) for more details.


## Features:
  * based solely on HTML, CSS and Javascript (no external javascript libraries)
  * can be used off-line (full application in a single html file of size &lt; 400KB)
  * requires nothing more than a modern web browser (tested on Firefox, Chrome and Safari)
  * supported region shapes: rectangle, circle, ellipse, polygon and point
  * import/export of region data in csv and json file format

### 02 April 2019
 * Planning and drawing up a wireframe
 * Step 1: User must first register
 * Step 2: User clicks on the 'Enter' button
 * Step 3: User enters a login name and password
 * Step 4: Verification of correct username and password, if incorrect return to login page and if correct proceed.
 * Step 5: Once login is successful the data annotation page will appear
 * On the data annotation page there will be options: Get new, save and Vai image manipulation
 * That will be the end of the registration and login section

### 03 April 2019
 * Once the user has the data annotaion page open they can now start working
 * Step 6: Get new image from S3 Amazon and will be save in Heroku server once completed
 * Step 7: Check if image has been selected: if yes then proceed and if not user will be redirected to the S3 Amazon page and will reselect image
 * Step 8: Once user has completed working on the image they will save and the Json file will be redirected to Heroku server.

 ### Work Done
  * Created a separate css and javascript folder


## Downloads
See http://www.robots.ox.ac.uk/~vgg/software/via/

## Docs
 * User Guide : this can be accessed from the menubar "Help -> Getting Started"
 * [VIA Software page @ VGG](http://www.robots.ox.ac.uk/~vgg/software/via/)
 * [VIA Wikipedia page](https://en.wikipedia.org/wiki/VGG_Image_Annotator)

## Developer Resources
For development, [via.js](https://gitlab.com/vgg/via/blob/develop/via.js) 
contains the Javascript source code and 
[index.html](https://gitlab.com/vgg/via/blob/develop/index.html) contains the 
HTML and CSS. The shell script [scripts/pack_via.sh](scripts/pack_via.sh) 
packs the VIA application into a single and standalone application file 
[via.html](https://gitlab.com/vgg/via/blob/develop/via.html) containing the 
Javascript, HTML and CSS.

 * Source code: [VGG Image Annotator @ develop branch](https://gitlab.com/vgg/via/blob/develop)
 * [Source code documentation](https://gitlab.com/vgg/via/blob/develop/CodeDoc.md)
 * Unit Tests : see files inside `tests/` folder

The [Quality Assessment](https://gitlab.com/vgg/via/blob/develop/QualityAssessment.md) 
page describes the guidelines to ensure the quality of VIA application, source 
code and its documentation.

Software bug reports and feature requests should be 
[submitted here](https://gitlab.com/vgg/via/issues/new) (requires gitlab account).
For all other queries, please contact [Abhishek Dutta](mailto:adutta@robots.ox.ac.uk).
For more queries on the updated version, please contact [Kudakwashe Mukombachoto](mailto:kudakwashe@aerobotics.co) [Eurico Jeremias Catumbela](mailto:erick@aerobotics.co)

## License
VIA is an open source project released under the 
[BSD-2 clause license](https://gitlab.com/vgg/via/blob/master/LICENSE).

## Author
[Abhishek Dutta](mailto:adutta@robots.ox.ac.uk)  
Aug. 31, 2016

## Contributors
[Kudakwashe Mukombachoto](mailto:kudakwashe@aerobotics.co)
[Eurico Jeremias Catumbela](mailto:erick@aerobotics.co)
April. 2019