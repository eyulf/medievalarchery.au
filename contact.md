---
layout: sidebox
nav: Contact
title: Contact MAS
permalink: /contact/
---

You can use the form below to send us an email.

<div id="form">
    <form name="contact" method="POST" action="//formspree.io/admin@medievalarchery.org.au">
        <input type="hidden" name="_subject" value="MAS Website Contact" />
        <input type="hidden" name="_next" value="{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}#form" />
        <input type="text" name="_gotcha" style="display:none" />
        
        <div class="form-object">

            <input type="text" name="name" placeholder="Your name" />
        </div>
        
        <div class="form-object">

            <input type="email" name="email" placeholder="Your email" />
        </div>
        
        <div class="form-object">

            <textarea name="message" rows="6" placeholder="Your enquiry" ></textarea>
        </div>
        
        <div class="form-object">
            <input type="submit" value="Send">
        </div>
    </form>
    
    <p class="confirmation">Your email has been sent!</p>
</div>