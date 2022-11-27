"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[80749],{190:(e,t,n)=>{n.r(t),n.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-98143184","path":"/advanced/zigbee/02_improve_network_range_and_stability.html","title":"Improve network range and stability","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"USB based adapter","slug":"usb-based-adapter","link":"#usb-based-adapter","children":[{"level":3,"title":"Connect the adapter using an USB extension cable","slug":"connect-the-adapter-using-an-usb-extension-cable","link":"#connect-the-adapter-using-an-usb-extension-cable","children":[]},{"level":3,"title":"Try different orientations of the adapter","slug":"try-different-orientations-of-the-adapter","link":"#try-different-orientations-of-the-adapter","children":[]}]},{"level":2,"title":"Reduce Wi-Fi interference by changing the Zigbee channel","slug":"reduce-wi-fi-interference-by-changing-the-zigbee-channel","link":"#reduce-wi-fi-interference-by-changing-the-zigbee-channel","children":[]},{"level":2,"title":"Interference from other 2.4 GHz devices","slug":"interference-from-other-2-4-ghz-devices","link":"#interference-from-other-2-4-ghz-devices","children":[]},{"level":2,"title":"Adding more routers to your network","slug":"adding-more-routers-to-your-network","link":"#adding-more-routers-to-your-network","children":[]}],"git":{"updatedTime":1669574130000},"filePathRelative":"advanced/zigbee/02_improve_network_range_and_stability.md"}')},97429:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(66252);const i=(0,r.uE)('<h1 id="improve-network-range-and-stability" tabindex="-1"><a class="header-anchor" href="#improve-network-range-and-stability" aria-hidden="true">#</a> Improve network range and stability</h1><p>In case you are experiencing an unstable or bad network range you can do the following things to improve your network.</p><h2 id="usb-based-adapter" tabindex="-1"><a class="header-anchor" href="#usb-based-adapter" aria-hidden="true">#</a> USB based adapter</h2><h3 id="connect-the-adapter-using-an-usb-extension-cable" tabindex="-1"><a class="header-anchor" href="#connect-the-adapter-using-an-usb-extension-cable" aria-hidden="true">#</a> Connect the adapter using an USB extension cable</h3><p>The range of these adapters can greatly be improved when connecting them with an USB extension cable instead of directly plugging it into the computer (e.g. Raspberry Pi). When plugged directly into the computer, the antenna suffers from interference of radio signals and electrical components of the computer. Also be sure not to position the adapter too close to any other radio transmitting devices (e.g. a Wi-Fi router) or an SSD. A USB extension cable of 50 cm is already enough to reduce the interference.</p>',5),a=(0,r._)("strong",null,"Do not underestimate this!",-1),o={href:"https://www.unit3compliance.co.uk/2-4ghz-intra-system-or-self-platform-interference-demonstration/",target:"_blank",rel:"noopener noreferrer"},d=(0,r.uE)('<h3 id="try-different-orientations-of-the-adapter" tabindex="-1"><a class="header-anchor" href="#try-different-orientations-of-the-adapter" aria-hidden="true">#</a> Try different orientations of the adapter</h3><p>RF connection between the adapter and other devices also depends on the way it is oriented in space. You might be having very poor <code>linkquality</code> reports and intermittent ping failures but once the adapter is rotated a little it all can change greatly without re-locating the coordinator far away. Try to experiment with positioning and orienting the adapter in space while monitoring the <code>linkquality</code> values reported. You might find it useful to buy a small rotating USB connector like this:</p><p><img src="https://i.imgur.com/AI41Oxz.png" alt="rotating USB connector"></p><h2 id="reduce-wi-fi-interference-by-changing-the-zigbee-channel" tabindex="-1"><a class="header-anchor" href="#reduce-wi-fi-interference-by-changing-the-zigbee-channel" aria-hidden="true">#</a> Reduce Wi-Fi interference by changing the Zigbee channel</h2><p><strong>Changing the Zigbee channel requires repairing of all your devices!</strong></p>',5),c={href:"https://www.metageek.com/training/resources/zigbee-wifi-coexistence.html",target:"_blank",rel:"noopener noreferrer"},h=(0,r._)("code",null,"channel",-1),l=(0,r._)("code",null,"configuration.yaml",-1),s=(0,r._)("h2",{id:"interference-from-other-2-4-ghz-devices",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#interference-from-other-2-4-ghz-devices","aria-hidden":"true"},"#"),(0,r.Uk)(" Interference from other 2.4 GHz devices")],-1),g=(0,r._)("p",null,"Any device using the open 2.4 GHz spectrum could interfere with Zigbee such as Bluetooth or gaming devices like Logitech “Unifying” or “Lightspeed” or Razer “Hyperspeed Wireless”.",-1),u=(0,r._)("h2",{id:"adding-more-routers-to-your-network",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#adding-more-routers-to-your-network","aria-hidden":"true"},"#"),(0,r.Uk)(" Adding more routers to your network")],-1),p={},f=(0,n(83744).Z)(p,[["render",function(e,t){const n=(0,r.up)("ExternalLinkIcon"),p=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",null,[i,(0,r._)("p",null,[a,(0,r.Uk)(" Placing your adapter close to an USB port can kill the radio signal entirely as demonstrated in "),(0,r._)("a",o,[(0,r.Uk)("this article"),(0,r.Wm)(n)]),(0,r.Uk)(".")]),d,(0,r._)("p",null,[(0,r.Uk)("As Wi-Fi and Zigbee both operate on the same frequency space (2.4 GHz), they can interfere with each other. By using the correct Zigbee channel, interference with Wi-Fi can (partly) be avoided. A good article explaining this is "),(0,r._)("a",c,[(0,r.Uk)("Zigbee and Wi-Fi Coexistence"),(0,r.Wm)(n)]),(0,r.Uk)(".")]),(0,r._)("p",null,[(0,r.Uk)("To change the Zigbee channel Zigbee2MQTT uses you have to set the "),(0,r.Wm)(p,{to:"/guide/configuration/zigbee-network.html"},{default:(0,r.w5)((()=>[h,(0,r.Uk)(" in "),l])),_:1}),(0,r.Uk)(".")]),s,g,u,(0,r._)("p",null,[(0,r.Uk)("In a Zigbee network, each router will extend the range of the network ("),(0,r.Wm)(p,{to:"/advanced/zigbee/01_zigbee_network.html"},{default:(0,r.w5)((()=>[(0,r.Uk)("read more about this")])),_:1}),(0,r.Uk)("). Almost all AC powered devices will serve as a router.")])])}]])}}]);