 //<!--AUTO_INSERT_VIA_JS_HERE-->
 /*
  VGG Image Annotator (via)
  www.robots.ox.ac.uk/~vgg/software/via/

  Copyright (c) 2016-2018, Abhishek Dutta, Visual Geometry Group, Oxford University.
  All rights reserved.

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

  Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.
  Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.
  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
  LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
  CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
  SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
  INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
  CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
  POSSIBILITY OF SUCH DAMAGE.
*/

/*
  See Contributors.md file for a list of developers who have contributed code
  to VIA codebase.
  /*

  This source code (version 1.0.x) is organized in the following groups:

  - Data structure for annotations
  - Initialization routine
  - Handlers for top navigation bar
  - Local file uploaders
  - Data Importer
  - Data Exporter
  - Maintainers of user interface
  - Image click handlers
  - Canvas update routines
  - Region collision routines
  - Shortcut key handlers
  - Persistence of annotation data in browser cache (i.e. localStorage)
  - Handlers for attributes input panel (spreadsheet like user input panel)

  See [Source code documentation](https://gitlab.com/vgg/via/blob/develop/CodeDoc.md)
  and [Contributing Guidelines](https://gitlab.com/vgg/via/blob/develop/CONTRIBUTING.md)
  for more details.

*/

"use strict";

var VIA_VERSION      = '2.0.0';
var VIA_NAME         = 'VGG Image Annotator';
var VIA_SHORT_NAME   = 'VIA';
var VIA_PROJECT_PREFIX = 'Fruit Labelling: ';
var VIA_REGION_SHAPE = { RECT:'rect',
                         CIRCLE:'circle',
                         ELLIPSE:'ellipse',
                         POLYGON:'polygon',
                         POINT:'point',
                         POLYLINE:'polyline'
                       };

var VIA_ATTRIBUTE_TYPE = { TEXT:'text',
                           CHECKBOX:'checkbox',
                           RADIO:'radio',
                           IMAGE:'image',
                           DROPDOWN:'dropdown'
                         };

                         var VIA_DISPLAY_AREA_CONTENT_NAME = {IMAGE:'image_panel',
                         IMAGE_GRID:'image_grid_panel',
                         SETTINGS:'settings_panel',
                         PAGE_404:'page_404',
                         PAGE_USER_GUIDE:'page_user_guide',
                         PAGE_GETTING_STARTED:'page_getting_started',
                         PAGE_ABOUT:'page_about',
                         PAGE_START_INFO:'page_start_info',
                         PAGE_LICENSE:'page_license'
                        };