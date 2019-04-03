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
 * Step 2: User clicks on the 'start' button
 * Step 3: User enters a login name and password
 * Step 4: Varification of correct username and password, if incorrect return to login page and if correct proceed.
 * Step 5: Once login is successful the data annotation page will appear
 * That will be the end of the registration and login section


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

## License
VIA is an open source project released under the 
[BSD-2 clause license](https://gitlab.com/vgg/via/blob/master/LICENSE).

## Author
[Abhishek Dutta](mailto:adutta@robots.ox.ac.uk)  
Aug. 31, 2016

## Contributors
[Kudakwashe Mukombachoto](kudakwashe@aerobotics.co)
[Eurico Jeremias Catumbela](erick@aerobotics.co)
April. 2019