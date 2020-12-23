---
layout: page
title: OneDrive for Sonos
permalink: /sonos-onedrive/
image: /img/project_sonos_onedrive.jpg
keywords: Sonos, OneDrive, Microsoft, Cloud Storage, Music
description: Listen to music stored in your OneDrive through Sonos speakers.
excerpt: |
 OneDrive for Sonos
---

After building the [NPR One Service for Sonos](/sonos-nprone/), I recently found myself looking for a way to play my music stored on [OneDrive](https://onedrive.com). Seeing that OneDrive provides an [easy to use API](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/?view=odsp-graph-online), I built this service. If you run into any issues, feel free to email me at [b.michael.dick@gmail.com](mailto:b.michael.dick@gmail.com).

If you are a developer yourself, all code is available on [GitHub](https://github.com/bertique/SonosOneDriveServer) and you can set up your own server if you prefer to do so.

## FAQ
***

***I get an error message 400 bad request***
This seemse to happen from time to time. Just start over with adding the service through the customsd.htm below and make sure you follow every step exactly. Sometimes waiting another day before trying again helps.

***I get an error that my account can't be authorized***
This seemse to happen from time to time. Just start over with adding the service through the customsd.htm below and make sure you follow every step exactly. Sometimes waiting another day before trying again helps.

***Does this cost money?***
People have been asking, so... if you would like to help out with server costs to run this, you can send me a few bucks on [my Paypal](https://paypal.me/michaeldick99){:target="_blank"}. This is a free service that I built, so this is defnitely not required but greatly appreciated.

***How do I stay in the loop on any updates?***

<!-- Begin MailChimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/slim-081711.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	#mc_embed_signup form{padding:0; }
</style>
<div id="mc_embed_signup">
<form action="//michaeldick.us11.list-manage.com/subscribe/post?u=6514e7cf250dcbb3bf07ad690&amp;id=6abfd24149" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
<div id="mc_embed_signup_scroll">
<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
<div class="mc-field-group input-group" style="display:none">
    <strong>Project </strong>
    <ul><li><input type="checkbox" value="1" name="group[19585][1]" id="mce-group[19585]-19585-0"><label for="mce-group[19585]-19585-0">NPR One for Sonos</label></li>
<li><input type="checkbox" value="2" name="group[19585][2]" id="mce-group[19585]-19585-1" checked><label for="mce-group[19585]-19585-1">OneDrive for Sonos</label></li>
</ul>
</div>
<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
<div style="position: absolute; left: -5000px;"><input type="text" name="b_6514e7cf250dcbb3bf07ad690_6abfd24149" tabindex="-1" value=""></div>
<div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
</div>
</form>
</div>
<!--End mc_embed_signup-->

## Instructions
***
### Adding OneDrive to your Sonos

Open your Sonos desktop app and go to Help ->  About my Sonos System... (on Mac this is located under the SONOS menu)

![screenshot](/img/sonos-nprone/sonos-init.png) 

![screenshot](/img/sonos-nprone/sonos-ip.png)

Then note down the ip address under *Associated Product*. For me this would be *192.168.1.203*.

Alternatively, you can also use your Sonos app on your iOS or Android to find the ip address. Check under Settings -> About my Sonos System

![screenshot](/img/sonos-nprone/sonos-ip-ios.png)

Open a web browser and type http://[your ip address from above]:1400/customsd.htm. So for me this would be *http://192.168.1.203:1400/customsd.htm*.

Enter the information below into the form and hit submit. This will add the service to your Sonos.

1. **SID:** 248
2. **Service Name:** OneDrive
3. **Endpoint URL:** http://sonosonedrive.herokuapp.com/soap
4. **Secure Endpoint URL:** https://sonosonedrive.herokuapp.com/soap
5. **Polling Interval:** 3600
6. **Authentication SOAP header policy:** Device Link
7. **Strings table:**
  * Version: 1
  * Uri: https://sonosonedrive.herokuapp.com/static/strings.xml
8. **Presentation map:**
 * Version: 1
 * Uri: https://sonosonedrive.herokuapp.com/static/presentationMap.xml
9. **Container Type:**
 * Music Service
11. **Capabilities:**
 * Search
 
![screenshot](/img/sonos-onedrive/sonos-add4.png)

Go back to your Sonos app and choose Add Music Service. You should now find OneDrive in the list of services.

![screenshot](/img/sonos-nprone/sonos-service.png)

Select I already have an account.

![screenshot](/img/sonos-onedrive/sonos-add-1.png)

Open [https://login.live.com/oauth20_remoteconnect.srf](https://login.live.com/oauth20_remoteconnect.srf){:target="_blank"} and enter the code shown in the Sonos window.

![screenshot](/img/sonos-onedrive/sonos-add-2.png)

Allow access for the OneDrive Sonos app. You might have to log in first with your Microsoft credentials if you haven't done already.

![screenshot](/img/sonos-onedrive/sonos-add-3.png)

Now you are all set and can start listening to music from your OneDrive. Browse through your folders and add folders or songs to your My Sonos.

Feel free to reach out with any questions or issues at [b.michael.dick@gmail.com](mailto:b.michael.dick@gmail.com).

### Removing OneDrive from your Sonos

If you would like to remove the OneDrive service from your Sonos just follow the steps below.

Open your desktop app and go to Manage -> Settings...

![screenshot](/img/sonos-nprone/sonos-remove.png)

Find the OneDrive services in the list and hit Remove.

![screenshot](/img/sonos-onedrive/sonos-remove-2.png)

Go back to the browser page from above and submit the form, leaving all fields empty, but the SID set to 248. This will remove the OneDrive service from your Sonos.

![screenshot](/img/sonos-onedrive/sonos-remove-3.png)
