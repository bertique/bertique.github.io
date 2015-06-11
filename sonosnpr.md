---
layout: page
title: NPROne for Sonos
permalink: /sonos-nprone/
image: /img/project_sonos_nprone.jpg
excerpt: |
 I love my [Sonos](http://sonos.com) wireless music system. Inspired by the work of [Rahim S](http://www.hirahim.com/blog/2014/07/10/shutting-down-soundcloud-on-sonos/), I built a service to integrate the NPROne radio service into Sonos using the [Sonos API](http://musicpartners.sonos.com).
 
 Java \| APIs
---

Welcome to my *unofficial* NPR One service for Sonos. I love my Sonos system and I really like the NPR One app. That's why I have built this service. This service is supported neither by NPR nor by Sonos, so please send all feedback and problems to [b.michael.dick@gmail.com](mailto:b.michael.dick@gmail.com).

**Updates**

06/10/2015: Updated authentication to use device connect through the NPR website(using OAuth). If you previously added the service, it will ask you to re-authenticate (you might have to update the service configuration on your customsd.htm). Also improved search to include aggregation lists of shows and podcasts.

03/25/2015: Added Search and Suggestions - Now you can search through the NPR archive using the Sonos search. If you have previously added the service, make sure to update the settings to include search and update the version on the presentation map.

### Before you start
You will need a NPR One account. You can create one for free by downloading the [NPR One app](http://www.npr.org/about/products/npr-one/), or right on the [NPR website](http://www.npr.org/templates/reg/).

### Adding NPROne to your Sonos
Open your Sonos desktop app and go to Help ->  About my Sonos System...

![screenshot](/img/sonos-nprone/sonos-init.png)

Then note down the ip address under *Associated ZP*. 

![screenshot](/img/sonos-nprone/sonos-ip.png)

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
 * Extended Metadata (for MOAPI-based InfoView)
 
![screenshot](/img/sonos-nprone/sonos-add3.png)

Go back to your Sonos app and choose Add Music Service. You should now find NPROne in the list of services.

![screenshot](/img/sonos-nprone/sonos-service.png)

Select I already have an account.

![screenshot](/img/sonos-nprone/sonos-add-1.png)

Open [http://npr.org/device](http://npr.org/device) and enter the code shown in the Sonos window.

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


