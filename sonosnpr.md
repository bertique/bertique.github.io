---
layout: page
title: NPR One for Sonos
permalink: /sonos-nprone/
image: /img/project_sonos_nprone.jpg
keywords: Sonos, NPR One, NPR, National Public Radio, NPR Music
description: Listen to NPR One on your Sonos system. Enjoy access to the full NPR archive, shows you follow, NPR music and more through all your wireless speakers.
excerpt: |
 I love my [Sonos](http://sonos.com) wireless music system. Inspired by the work of [Rahim S](http://www.hirahim.com/blog/2014/07/10/shutting-down-soundcloud-on-sonos/), I built a service to integrate the NPROne radio service into Sonos using the [Sonos API](http://musicpartners.sonos.com).
 
 Java \| APIs
---

Welcome to my *unofficial* NPR One service for Sonos. I love my Sonos system and I really like the [NPR One app](http://www.npr.org/about/products/npr-one/){:target="_blank"}. That's why I have built this service. This service is supported neither by NPR nor by Sonos, so please send all feedback and problems to [b.michael.dick@gmail.com](mailto:b.michael.dick@gmail.com).

<a class="twitter-grid" data-limit="3" data-partner="tweetdeck" href="https://twitter.com/midi2dot0/timelines/856291675596967938">NPR One for Sonos tweets</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

**Updates**

06/30/2018: Bug fixes and performance improvements.

~~05/13/2017: Added easier way to add service below (Thanks Josh from [Overcast + Sonos](https://github.com/josh/overcast-sonos){:target="_blank"})~~

11/01/2016: Added new NPR Music channels.

07/01/2016: NPR One for Sonos got featured on the [NPR One project gallery](http://dev.npr.org/guide/prerequisites/project-gallery/){:target="_blank"}.

03/21/2016: Added new channels (Suggested, Followed, Recent, etc.). 

12/05/2015: Put all [source code on GitHub](https://github.com/bertique/SonosNPROneServer){:target="_blank"} if you are interested.

06/10/2015: Updated authentication to use NPR's oauth. Also improved search to include aggregation lists of shows and podcasts.

03/25/2015: Added Search and Suggestions - Now you can search through the NPR archive using the Sonos search.

**Find out about updates**

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
<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
<div style="position: absolute; left: -5000px;"><input type="text" name="b_6514e7cf250dcbb3bf07ad690_6abfd24149" tabindex="-1" value=""></div>
<div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
</div>
</form>
</div>

<!--End mc_embed_signup-->

## Instructions

### Before you start

You will need a NPR One account. You can create one for free by downloading the [NPR One app](http://www.npr.org/about/products/npr-one/){:target="_blank"}, or right on the [NPR website](http://www.npr.org/templates/reg/){:target="_blank"}.

### Adding NPROne to your Sonos

Open your Sonos desktop app and go to Help ->  About my Sonos System... (on Mac this is located under the SONOS menu)

![screenshot](/img/sonos-nprone/sonos-init.png) 

![screenshot](/img/sonos-nprone/sonos-ip.png)

Then note down the ip address under *Associated ZP*. For me this would be *192.168.1.213*.

Alternatively, you can also use your Sonos app on your iOS or Android to find the ip address. Check under Settings -> About my Sonos System

![screenshot](/img/sonos-nprone/sonos-ip-ios.png)

Open a web browser and type http://[your ip address from above]:1400/customsd.htm. So for me this would be *http://192.168.1.213:1400/customsd.htm*.

Enter the information below into the form and hit submit. This will add the service to your Sonos.

1. **SID:** 255
2. **Service Name:** NPROne
3. **Endpoint URL:** http://sonosnprone.herokuapp.com/soap
4. **Secure Endpoint URL:** https://sonosnprone.herokuapp.com/soap
5. **Polling Interval:** 3600
6. **Authentication SOAP header policy:** Device Link
7. **Strings table:**
  * Version: 2
  * Uri: http://sonosnprone.herokuapp.com/static/strings.xml
8. **Presentation map:**
 * Version: 2
 * Uri: http://sonosnprone.herokuapp.com/static/presentationMap.xml
9. **Container Type:**
 * Music Service
11. **Capabilities:**
 * Search
 * Playback duration logging at track end
 * Playback event logging during track play
 * Extended Metadata (More Menu, Info & Options)
   * Extended Metadata for radios ("program") and streams ("stream") to support Info View. Requires Extended Metadata Capability.
 
![screenshot](/img/sonos-nprone/sonos-add4.png)

Go back to your Sonos app and choose Add Music Service. You should now find NPR One in the list of services.

![screenshot](/img/sonos-nprone/sonos-service.png)

Select I already have an account.

![screenshot](/img/sonos-nprone/sonos-add-1.png)

Open [http://npr.org/device](http://npr.org/device){:target="_blank"} and enter the code shown in the Sonos window.

![screenshot](/img/sonos-nprone/sonos-add-2.png)

Allow access for the NPR One Sonos app. You might have to log in first with your NPR One credentials if you haven't done already.

![screenshot](/img/sonos-nprone/sonos-add-3.png)

Now you are all set and can start listening to NPR One. You can skip and favourite stories just like in the NPR One app. Changing your NPR home station is currently not supported, however if you change it in the NPROne mobile app, the Sonos service will pick up the new station.

![screenshot](/img/sonos-nprone/sonos-done2.png)

Feel free to reach out with any questions or issues at [b.michael.dick@gmail.com](mailto:b.michael.dick@gmail.com).

### Removing NPROne from your Sonos

If you would like to remove the NPROne service from your Sonos just follow the steps below.

Open your desktop app and go to Manage -> Settings...

![screenshot](/img/sonos-nprone/sonos-remove.png)

Find the NPROne services in the list and hit Remove.

![screenshot](/img/sonos-nprone/sonos-remove-2.png)

Go back to the browser page from above and submit the form, leaving all fields empty. This will remove the NPROne service from your Sonos.

![screenshot](/img/sonos-nprone/sonos-remove-3.png)