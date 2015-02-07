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

### Before you start
You will need a NPR One account. You can create one for free by downloading the [NPR One app](http://www.npr.org/about/products/npr-one/), or right on the [NPR website](http://www.npr.org/templates/reg/). Make sure to sign up with username/password, because currently my Sonos service does not yet work with the Facebook or Google login. If you signed up with one of those services, you can set a password at [npr.org](https://npr.org/login).

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
6. **Authentication SOAP header policy:** Session ID
7. **Strings table:** http://sonosnprone.herokuapp.com/static/strings.xml
8. **Presentation map:** http://sonosnprone.herokuapp.com/static/presentationMap.xml
9. **Container Type:**
 * Music Service
11. **Capabilities:**
 * Playback duration logging at track end
 * Playback event logging during track play
 * Extended Metadata (for MOAPI-based InfoView)
 
![screenshot](/img/sonos-nprone/sonos-add.png)

Go back to your Sonos app and choose Add Music Service. You should now find NPROne in the list of services.

![screenshot](/img/sonos-nprone/sonos-service.png)

Select I already have an account.

![screenshot](/img/sonos-nprone/sonos-add-1.png)

Log in with your NPR One username and password.

![screenshot](/img/sonos-nprone/sonos-add-2.png)

Now you are all set and can start listening to NPR One. You can skip and favourite stories just like in the NPR One app. Changing your NPR home station is currently not supported, however if you change it in the NPROne mobile app, the Sonos service will pick up the new station.

![screenshot](/img/sonos-nprone/sonos-done.png)

Feel free to reach out with any questions or issues at [b.michael.dick@gmail.com](mailto:b.michael.dick@gmail.com).

### Removing NPROne from your Sonos
If you would like to remove the NPROne service from your Sonos just follow the steps below.

Open your desktop app and go to Manage -> Settings...

![screenshot](/img/sonos-nprone/sonos-remove.png)

Find the NPROne services in the list and hit Remove.

![screenshot](/img/sonos-nprone/sonos-remove-2.png)

Go back to the browser page from above and submit the form, leaving all fields empty. This will remove the NPROne service from your Sonos.

![screenshot](/img/sonos-nprone/sonos-remove-3.png)


