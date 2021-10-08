import Vue from 'vue';
import { LMap, LTileLayer, LMarker, LTooltip, LPopup, LIcon, LPolyline, LPolygon, LControl } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-tooltip',LTooltip);
Vue.component('l-popup', LPopup);
Vue.component('l-icon', LIcon);
Vue.component('l-polyline', LPolyline);
Vue.component('l-polygon', LPolygon);
Vue.component('l-control', LControl)
