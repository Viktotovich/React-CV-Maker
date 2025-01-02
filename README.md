#Remarks

29/12/2024: I am absolutely floored at how easy this project is to handle.
I came in today tired and sleepy, dreading the fact that I
would need to do a lot of heavy lifting to separate the
editBar and the main content. That, and the fact that I'd
have to add in styles.

It took me less than 15 minutes to get half of that work
done. React makes it so simple it's insane.

Something that would have taken me ages to write out specific
classes for containers, and finding them in the endless void
of const labelContainer = document.createElement("div").

React is a pleasure to work with.

However, this is half the battle - the second half (both
literally and figuratively), begins with the actual
CV content and making it editable

30/12/2024: Stuck in an analysis paralysis - do I use one
MEGA useState object for every single one of the inputs -
or do I do 14/15/16 or however many input
fields there are? Mega useState object sounds nice,
but it seems like such a code stink.

On the other side, creating a useState for each input item
will clutter the code base

02/01/2025: I have tried to export to PDF through react to pdf
package, and then from hugoxcl atleast to an image - neither
worked. One had something to do with render being depriciated
and it kept crashing the page - the other absolutely did
not work at all.

TODO: explore potential solution to fix - for now,
the project is practically finished. I will implement
this on our main site with the pdf functionality
