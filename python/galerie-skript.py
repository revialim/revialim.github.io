#!/usr/bin/python

import sys
import os

###galerie bau skript###

#seiten-template
titellist = ["Traditional and Digital Paintings", "Pictures with Blender", "Photomanipulation"]

head = "<head>\n<title> Work </title>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"./galerie.css\">\n<!-- Lightbox Source: https://github.com/duncanmcdougall/Responsive-Lightbox --> \n<script src=\"jquery.min.js\"></script> \n<script src=\"jquery.lightbox.min.js\"></script>\n<link href=\"jquery.lightbox.min.css\" rel=\"stylesheet\" />\n</head>\n\n"

bodyend = "</div>\n<script>\n $(function()\n {\n    $('.g1 a').lightbox();\n	// If you want seperate galleries on the same page\n	// just specify different class names. \n });\n</script>\n\n"

bodyend2 = "\n</body>\n"

def makebodystart(galerietitel):
    bodystart = "<body>\n<h1>"+galerietitel+"</h1><br>\n<ul class=\"lemenu\">\n <li><a href=\"./index.html\">Home</a> |</li>\n <li><a href=\"./work.html\">Work</a> |</li>\n <li><a href=\"./kontakt.html\">Contact</a></li>\n</ul>\n\n<p>\n  <a href=\"./my-javascripts.html\">JavaScript</a>\n| <a href=\"./gal2-blenderbilder.html\">Blender</a>\n| <a href=\"./processing-files/processing-gal.html\">Processing</a> \n| <a href=\"./gal1-bilder.html\"> Traditional and Digital Paintings</a>\n| <a href=\"./animations.html\"> 2D Animation </a> \n| <a href=\"./gal3-photomanipulation.html\"> Photomanipulation </a>\n</p> \n \n<div class=\"gallerygroup g1\">\n\n"

    return bodystart;


#iteriere ueber alle bilder und erstelle bodymiddle
def makebodymiddle(p):
    #bodymiddlefinal =[]
    bodymiddle =""
    hasvid = False

    pics = os.listdir(p)
    
    #print "pics of "+p+": \n"
    for pic in pics:
        if(pic[:1]=="x"):
            smallname = pic #preview image
            imagename = pic[2:]
            bodymiddlesec = "<div class=\"imgx\">\n<a href=\""+p[1:] + imagename +"\">\n<img src=\""+p[1:] + smallname +"\"></a>\n</div>\n\n"
            bodymiddle = bodymiddle + bodymiddlesec
            #print "smallname="+smallname +" | imagename="+imagename
            
        elif(pic[:2]=="v-"):
            vidname = pic
            #print vidname
            vidsec = "<video width=\"600\" controls>\n  <source src=\""+p[1:] +vidname+"\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>\n\n"
            hasvid = True;

    #return bodymiddle;
    if hasvid:
        bodymiddle = bodymiddle + bodyend + vidsec
        #print bodyend
        #print vidsec
        return bodymiddle;
    else: 
        bodymiddle = bodymiddle + bodyend
        return bodymiddle;


#neue html seite
galerienum = 1
dirs = os.listdir('../bilder/')
for f in dirs:
    path='../bilder/'+f+'/'
    if(os.path.isdir(path)):
        name = path[10:-1]
        #print path[10:-1]
        #filename = "galerie"+str(galerienum)+".html"
        filename = name+".html"
        page = open("../"+filename, "w")
        #bodymiddle = makebodymiddle(galerienum)

        bodymiddle = makebodymiddle(path)
        titel = titellist[galerienum-1]
        #print titel
        bodystart = makebodystart(titel)
        page.write(head + bodystart + bodymiddle + bodyend2)
        page.close()
        galerienum = galerienum+1



