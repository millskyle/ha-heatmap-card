(()=>{var bi=Object.create;var Xa=Object.defineProperty;var vi=Object.getOwnPropertyDescriptor;var yi=Object.getOwnPropertyNames;var wi=Object.getPrototypeOf,_i=Object.prototype.hasOwnProperty;var ki=(R,c)=>()=>(c||R((c={exports:{}}).exports,c),c.exports);var xi=(R,c,p,m)=>{if(c&&typeof c=="object"||typeof c=="function")for(let v of yi(c))!_i.call(R,v)&&v!==p&&Xa(R,v,{get:()=>c[v],enumerable:!(m=vi(c,v))||m.enumerable});return R};var $i=(R,c,p)=>(p=R!=null?bi(wi(R)):{},xi(c||!R||!R.__esModule?Xa(p,"default",{value:R,enumerable:!0}):p,R));var en=ki((mt,bt)=>{(function(R,c){typeof mt=="object"&&typeof bt<"u"?bt.exports=c():typeof define=="function"&&define.amd?define(c):(R=typeof globalThis<"u"?globalThis:R||self).chroma=c()})(mt,function(){"use strict";for(var R=function(e,t,a){return t===void 0&&(t=0),a===void 0&&(a=1),e<t?t:e>a?a:e},c=R,p={},m=0,v=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];m<v.length;m+=1){var A=v[m];p["[object "+A+"]"]=A.toLowerCase()}var F=function(e){return p[Object.prototype.toString.call(e)]||"object"},T=F,G=F,I=Math.PI,d={clip_rgb:function(e){e._clipped=!1,e._unclipped=e.slice(0);for(var t=0;t<=3;t++)t<3?((e[t]<0||e[t]>255)&&(e._clipped=!0),e[t]=c(e[t],0,255)):t===3&&(e[t]=c(e[t],0,1));return e},limit:R,type:F,unpack:function(e,t){return t===void 0&&(t=null),e.length>=3?Array.prototype.slice.call(e):T(e[0])=="object"&&t?t.split("").filter(function(a){return e[0][a]!==void 0}).map(function(a){return e[0][a]}):e[0]},last:function(e){if(e.length<2)return null;var t=e.length-1;return G(e[t])=="string"?e[t].toLowerCase():null},PI:I,TWOPI:2*I,PITHIRD:I/3,DEG2RAD:I/180,RAD2DEG:180/I},L={format:{},autodetect:[]},tn=d.last,an=d.clip_rgb,_t=d.type,re=L,kt=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=this;if(_t(e[0])==="object"&&e[0].constructor&&e[0].constructor===this.constructor)return e[0];var n=tn(e),o=!1;if(!n){o=!0,re.sorted||(re.autodetect=re.autodetect.sort(function(u,f){return f.p-u.p}),re.sorted=!0);for(var i=0,r=re.autodetect;i<r.length;i+=1){var s=r[i];if(n=s.test.apply(s,e))break}}if(!re.format[n])throw new Error("unknown format: "+e);var l=re.format[n].apply(null,o?e:e.slice(0,-1));a._rgb=an(l),a._rgb.length===3&&a._rgb.push(1)};kt.prototype.toString=function(){return _t(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var $=kt,$e=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply($e.Color,[null].concat(e)))};$e.Color=$,$e.version="2.4.2";var V=$e,nn=d.unpack,xt=Math.max,rn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=nn(e,"rgb"),n=a[0],o=a[1],i=a[2],r=1-xt(n/=255,xt(o/=255,i/=255)),s=r<1?1/(1-r):0,l=(1-n-r)*s,u=(1-o-r)*s,f=(1-i-r)*s;return[l,u,f,r]},on=d.unpack,sn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=on(e,"cmyk"))[0],n=e[1],o=e[2],i=e[3],r=e.length>4?e[4]:1;return i===1?[0,0,0,r]:[a>=1?0:255*(1-a)*(1-i),n>=1?0:255*(1-n)*(1-i),o>=1?0:255*(1-o)*(1-i),r]},ln=V,$t=$,Mt=L,cn=d.unpack,un=d.type,fn=rn;$t.prototype.cmyk=function(){return fn(this._rgb)},ln.cmyk=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply($t,[null].concat(e,["cmyk"])))},Mt.format.cmyk=sn,Mt.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=cn(e,"cmyk"),un(e)==="array"&&e.length===4)return"cmyk"}});var dn=d.unpack,hn=d.last,Re=function(e){return Math.round(100*e)/100},pn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=dn(e,"hsla"),n=hn(e)||"lsa";return a[0]=Re(a[0]||0),a[1]=Re(100*a[1])+"%",a[2]=Re(100*a[2])+"%",n==="hsla"||a.length>3&&a[3]<1?(a[3]=a.length>3?a[3]:1,n="hsla"):a.length=3,n+"("+a.join(",")+")"},gn=d.unpack,Ft=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=gn(e,"rgba"))[0],n=e[1],o=e[2];a/=255,n/=255,o/=255;var i,r,s=Math.min(a,n,o),l=Math.max(a,n,o),u=(l+s)/2;return l===s?(i=0,r=Number.NaN):i=u<.5?(l-s)/(l+s):(l-s)/(2-l-s),a==l?r=(n-o)/(l-s):n==l?r=2+(o-a)/(l-s):o==l&&(r=4+(a-n)/(l-s)),(r*=60)<0&&(r+=360),e.length>3&&e[3]!==void 0?[r,i,u,e[3]]:[r,i,u]},mn=d.unpack,bn=d.last,vn=pn,yn=Ft,Te=Math.round,wn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=mn(e,"rgba"),n=bn(e)||"rgb";return n.substr(0,3)=="hsl"?vn(yn(a),n):(a[0]=Te(a[0]),a[1]=Te(a[1]),a[2]=Te(a[2]),(n==="rgba"||a.length>3&&a[3]<1)&&(a[3]=a.length>3?a[3]:1,n="rgba"),n+"("+a.slice(0,n==="rgb"?3:4).join(",")+")")},_n=d.unpack,Le=Math.round,Et=function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var n,o,i,r=(t=_n(t,"hsl"))[0],s=t[1],l=t[2];if(s===0)n=o=i=255*l;else{var u=[0,0,0],f=[0,0,0],b=l<.5?l*(1+s):l+s-l*s,w=2*l-b,y=r/360;u[0]=y+1/3,u[1]=y,u[2]=y-1/3;for(var g=0;g<3;g++)u[g]<0&&(u[g]+=1),u[g]>1&&(u[g]-=1),6*u[g]<1?f[g]=w+6*(b-w)*u[g]:2*u[g]<1?f[g]=b:3*u[g]<2?f[g]=w+(b-w)*(2/3-u[g])*6:f[g]=w;n=(e=[Le(255*f[0]),Le(255*f[1]),Le(255*f[2])])[0],o=e[1],i=e[2]}return t.length>3?[n,o,i,t[3]]:[n,o,i,1]},At=Et,Ct=L,Nt=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,Dt=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,Pt=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,St=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,It=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Ot=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Bt=Math.round,Rt=function(e){var t;if(e=e.toLowerCase().trim(),Ct.format.named)try{return Ct.format.named(e)}catch{}if(t=e.match(Nt)){for(var a=t.slice(1,4),n=0;n<3;n++)a[n]=+a[n];return a[3]=1,a}if(t=e.match(Dt)){for(var o=t.slice(1,5),i=0;i<4;i++)o[i]=+o[i];return o}if(t=e.match(Pt)){for(var r=t.slice(1,4),s=0;s<3;s++)r[s]=Bt(2.55*r[s]);return r[3]=1,r}if(t=e.match(St)){for(var l=t.slice(1,5),u=0;u<3;u++)l[u]=Bt(2.55*l[u]);return l[3]=+l[3],l}if(t=e.match(It)){var f=t.slice(1,4);f[1]*=.01,f[2]*=.01;var b=At(f);return b[3]=1,b}if(t=e.match(Ot)){var w=t.slice(1,4);w[1]*=.01,w[2]*=.01;var y=At(w);return y[3]=+t[4],y}};Rt.test=function(e){return Nt.test(e)||Dt.test(e)||Pt.test(e)||St.test(e)||It.test(e)||Ot.test(e)};var kn=V,Tt=$,Lt=L,xn=d.type,$n=wn,qt=Rt;Tt.prototype.css=function(e){return $n(this._rgb,e)},kn.css=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Tt,[null].concat(e,["css"])))},Lt.format.css=qt,Lt.autodetect.push({p:5,test:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!t.length&&xn(e)==="string"&&qt.test(e))return"css"}});var Gt=$,Mn=V,Fn=d.unpack;L.format.gl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Fn(e,"rgba");return a[0]*=255,a[1]*=255,a[2]*=255,a},Mn.gl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Gt,[null].concat(e,["gl"])))},Gt.prototype.gl=function(){var e=this._rgb;return[e[0]/255,e[1]/255,e[2]/255,e[3]]};var En=d.unpack,An=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n=En(e,"rgb"),o=n[0],i=n[1],r=n[2],s=Math.min(o,i,r),l=Math.max(o,i,r),u=l-s,f=100*u/255,b=s/(255-u)*100;return u===0?a=Number.NaN:(o===l&&(a=(i-r)/u),i===l&&(a=2+(r-o)/u),r===l&&(a=4+(o-i)/u),(a*=60)<0&&(a+=360)),[a,f,b]},Cn=d.unpack,Nn=Math.floor,Dn=function(){for(var e,t,a,n,o,i,r=[],s=arguments.length;s--;)r[s]=arguments[s];var l,u,f,b=(r=Cn(r,"hcg"))[0],w=r[1],y=r[2];y*=255;var g=255*w;if(w===0)l=u=f=y;else{b===360&&(b=0),b>360&&(b-=360),b<0&&(b+=360);var k=Nn(b/=60),_=b-k,P=y*(1-w),N=P+g*(1-_),j=P+g*_,H=P+g;switch(k){case 0:l=(e=[H,j,P])[0],u=e[1],f=e[2];break;case 1:l=(t=[N,H,P])[0],u=t[1],f=t[2];break;case 2:l=(a=[P,H,j])[0],u=a[1],f=a[2];break;case 3:l=(n=[P,N,H])[0],u=n[1],f=n[2];break;case 4:l=(o=[j,P,H])[0],u=o[1],f=o[2];break;case 5:l=(i=[H,P,N])[0],u=i[1],f=i[2]}}return[l,u,f,r.length>3?r[3]:1]},Pn=d.unpack,Sn=d.type,In=V,jt=$,Vt=L,On=An;jt.prototype.hcg=function(){return On(this._rgb)},In.hcg=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(jt,[null].concat(e,["hcg"])))},Vt.format.hcg=Dn,Vt.autodetect.push({p:1,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=Pn(e,"hcg"),Sn(e)==="array"&&e.length===3)return"hcg"}});var Bn=d.unpack,Rn=d.last,Me=Math.round,Wt=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Bn(e,"rgba"),n=a[0],o=a[1],i=a[2],r=a[3],s=Rn(e)||"auto";r===void 0&&(r=1),s==="auto"&&(s=r<1?"rgba":"rgb");var l=(n=Me(n))<<16|(o=Me(o))<<8|(i=Me(i)),u="000000"+l.toString(16);u=u.substr(u.length-6);var f="0"+Me(255*r).toString(16);switch(f=f.substr(f.length-2),s.toLowerCase()){case"rgba":return"#"+u+f;case"argb":return"#"+f+u;default:return"#"+u}},Tn=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Ln=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Ht=function(e){if(e.match(Tn)){e.length!==4&&e.length!==7||(e=e.substr(1)),e.length===3&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e,16);return[t>>16,t>>8&255,255&t,1]}if(e.match(Ln)){e.length!==5&&e.length!==9||(e=e.substr(1)),e.length===4&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);var a=parseInt(e,16);return[a>>24&255,a>>16&255,a>>8&255,Math.round((255&a)/255*100)/100]}throw new Error("unknown hex color: "+e)},qn=V,zt=$,Gn=d.type,Qt=L,jn=Wt;zt.prototype.hex=function(e){return jn(this._rgb,e)},qn.hex=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(zt,[null].concat(e,["hex"])))},Qt.format.hex=Ht,Qt.autodetect.push({p:4,test:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!t.length&&Gn(e)==="string"&&[3,4,5,6,7,8,9].indexOf(e.length)>=0)return"hex"}});var Vn=d.unpack,Ut=d.TWOPI,Wn=Math.min,Hn=Math.sqrt,zn=Math.acos,Qn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n=Vn(e,"rgb"),o=n[0],i=n[1],r=n[2],s=Wn(o/=255,i/=255,r/=255),l=(o+i+r)/3,u=l>0?1-s/l:0;return u===0?a=NaN:(a=(o-i+(o-r))/2,a/=Hn((o-i)*(o-i)+(o-r)*(i-r)),a=zn(a),r>i&&(a=Ut-a),a/=Ut),[360*a,u,l]},Un=d.unpack,qe=d.limit,ue=d.TWOPI,Ge=d.PITHIRD,fe=Math.cos,Yn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n,o,i=(e=Un(e,"hsi"))[0],r=e[1],s=e[2];return isNaN(i)&&(i=0),isNaN(r)&&(r=0),i>360&&(i-=360),i<0&&(i+=360),(i/=360)<1/3?n=1-((o=(1-r)/3)+(a=(1+r*fe(ue*i)/fe(Ge-ue*i))/3)):i<2/3?o=1-((a=(1-r)/3)+(n=(1+r*fe(ue*(i-=1/3))/fe(Ge-ue*i))/3)):a=1-((n=(1-r)/3)+(o=(1+r*fe(ue*(i-=2/3))/fe(Ge-ue*i))/3)),[255*(a=qe(s*a*3)),255*(n=qe(s*n*3)),255*(o=qe(s*o*3)),e.length>3?e[3]:1]},Jn=d.unpack,Kn=d.type,Zn=V,Yt=$,Jt=L,Xn=Qn;Yt.prototype.hsi=function(){return Xn(this._rgb)},Zn.hsi=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Yt,[null].concat(e,["hsi"])))},Jt.format.hsi=Yn,Jt.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=Jn(e,"hsi"),Kn(e)==="array"&&e.length===3)return"hsi"}});var er=d.unpack,tr=d.type,ar=V,Kt=$,Zt=L,nr=Ft;Kt.prototype.hsl=function(){return nr(this._rgb)},ar.hsl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Kt,[null].concat(e,["hsl"])))},Zt.format.hsl=Et,Zt.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=er(e,"hsl"),tr(e)==="array"&&e.length===3)return"hsl"}});var rr=d.unpack,or=Math.min,ir=Math.max,sr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n,o,i=(e=rr(e,"rgb"))[0],r=e[1],s=e[2],l=or(i,r,s),u=ir(i,r,s),f=u-l;return o=u/255,u===0?(a=Number.NaN,n=0):(n=f/u,i===u&&(a=(r-s)/f),r===u&&(a=2+(s-i)/f),s===u&&(a=4+(i-r)/f),(a*=60)<0&&(a+=360)),[a,n,o]},lr=d.unpack,cr=Math.floor,ur=function(){for(var e,t,a,n,o,i,r=[],s=arguments.length;s--;)r[s]=arguments[s];var l,u,f,b=(r=lr(r,"hsv"))[0],w=r[1],y=r[2];if(y*=255,w===0)l=u=f=y;else{b===360&&(b=0),b>360&&(b-=360),b<0&&(b+=360);var g=cr(b/=60),k=b-g,_=y*(1-w),P=y*(1-w*k),N=y*(1-w*(1-k));switch(g){case 0:l=(e=[y,N,_])[0],u=e[1],f=e[2];break;case 1:l=(t=[P,y,_])[0],u=t[1],f=t[2];break;case 2:l=(a=[_,y,N])[0],u=a[1],f=a[2];break;case 3:l=(n=[_,P,y])[0],u=n[1],f=n[2];break;case 4:l=(o=[N,_,y])[0],u=o[1],f=o[2];break;case 5:l=(i=[y,_,P])[0],u=i[1],f=i[2]}}return[l,u,f,r.length>3?r[3]:1]},fr=d.unpack,dr=d.type,hr=V,Xt=$,ea=L,pr=sr;Xt.prototype.hsv=function(){return pr(this._rgb)},hr.hsv=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Xt,[null].concat(e,["hsv"])))},ea.format.hsv=ur,ea.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=fr(e,"hsv"),dr(e)==="array"&&e.length===3)return"hsv"}});var Fe={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},de=Fe,gr=d.unpack,ta=Math.pow,je=function(e){return(e/=255)<=.04045?e/12.92:ta((e+.055)/1.055,2.4)},Ve=function(e){return e>de.t3?ta(e,1/3):e/de.t2+de.t0},mr=function(e,t,a){return e=je(e),t=je(t),a=je(a),[Ve((.4124564*e+.3575761*t+.1804375*a)/de.Xn),Ve((.2126729*e+.7151522*t+.072175*a)/de.Yn),Ve((.0193339*e+.119192*t+.9503041*a)/de.Zn)]},aa=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=gr(e,"rgb"),n=a[0],o=a[1],i=a[2],r=mr(n,o,i),s=r[0],l=r[1],u=r[2],f=116*l-16;return[f<0?0:f,500*(s-l),200*(l-u)]},he=Fe,br=d.unpack,vr=Math.pow,We=function(e){return 255*(e<=.00304?12.92*e:1.055*vr(e,1/2.4)-.055)},He=function(e){return e>he.t1?e*e*e:he.t2*(e-he.t0)},na=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n,o,i=(e=br(e,"lab"))[0],r=e[1],s=e[2];return n=(i+16)/116,a=isNaN(r)?n:n+r/500,o=isNaN(s)?n:n-s/200,n=he.Yn*He(n),a=he.Xn*He(a),o=he.Zn*He(o),[We(3.2404542*a-1.5371385*n-.4985314*o),We(-.969266*a+1.8760108*n+.041556*o),We(.0556434*a-.2040259*n+1.0572252*o),e.length>3?e[3]:1]},yr=d.unpack,wr=d.type,_r=V,ra=$,oa=L,kr=aa;ra.prototype.lab=function(){return kr(this._rgb)},_r.lab=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(ra,[null].concat(e,["lab"])))},oa.format.lab=na,oa.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=yr(e,"lab"),wr(e)==="array"&&e.length===3)return"lab"}});var xr=d.unpack,$r=d.RAD2DEG,Mr=Math.sqrt,Fr=Math.atan2,Er=Math.round,ia=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=xr(e,"lab"),n=a[0],o=a[1],i=a[2],r=Mr(o*o+i*i),s=(Fr(i,o)*$r+360)%360;return Er(1e4*r)===0&&(s=Number.NaN),[n,r,s]},Ar=d.unpack,Cr=aa,Nr=ia,Dr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Ar(e,"rgb"),n=a[0],o=a[1],i=a[2],r=Cr(n,o,i),s=r[0],l=r[1],u=r[2];return Nr(s,l,u)},Pr=d.unpack,Sr=d.DEG2RAD,Ir=Math.sin,Or=Math.cos,sa=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Pr(e,"lch"),n=a[0],o=a[1],i=a[2];return isNaN(i)&&(i=0),[n,Or(i*=Sr)*o,Ir(i)*o]},Br=d.unpack,Rr=sa,Tr=na,la=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=Br(e,"lch"))[0],n=e[1],o=e[2],i=Rr(a,n,o),r=i[0],s=i[1],l=i[2],u=Tr(r,s,l),f=u[0],b=u[1],w=u[2];return[f,b,w,e.length>3?e[3]:1]},Lr=d.unpack,qr=la,Gr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Lr(e,"hcl").reverse();return qr.apply(void 0,a)},jr=d.unpack,Vr=d.type,ca=V,Ee=$,ze=L,ua=Dr;Ee.prototype.lch=function(){return ua(this._rgb)},Ee.prototype.hcl=function(){return ua(this._rgb).reverse()},ca.lch=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ee,[null].concat(e,["lch"])))},ca.hcl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ee,[null].concat(e,["hcl"])))},ze.format.lch=la,ze.format.hcl=Gr,["lch","hcl"].forEach(function(e){return ze.autodetect.push({p:2,test:function(){for(var t=[],a=arguments.length;a--;)t[a]=arguments[a];if(t=jr(t,e),Vr(t)==="array"&&t.length===3)return e}})});var fa={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},da=L,Wr=d.type,we=fa,Hr=Ht,zr=Wt;$.prototype.name=function(){for(var e=zr(this._rgb,"rgb"),t=0,a=Object.keys(we);t<a.length;t+=1){var n=a[t];if(we[n]===e)return n.toLowerCase()}return e},da.format.named=function(e){if(e=e.toLowerCase(),we[e])return Hr(we[e]);throw new Error("unknown color name: "+e)},da.autodetect.push({p:5,test:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!t.length&&Wr(e)==="string"&&we[e.toLowerCase()])return"named"}});var Qr=d.unpack,Ur=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Qr(e,"rgb"),n=a[0],o=a[1],i=a[2];return(n<<16)+(o<<8)+i},Yr=d.type,Jr=function(e){if(Yr(e)=="number"&&e>=0&&e<=16777215)return[e>>16,e>>8&255,255&e,1];throw new Error("unknown num color: "+e)},Kr=V,ha=$,pa=L,Zr=d.type,Xr=Ur;ha.prototype.num=function(){return Xr(this._rgb)},Kr.num=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(ha,[null].concat(e,["num"])))},pa.format.num=Jr,pa.autodetect.push({p:5,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e.length===1&&Zr(e[0])==="number"&&e[0]>=0&&e[0]<=16777215)return"num"}});var eo=V,Qe=$,ga=L,ma=d.unpack,ba=d.type,va=Math.round;Qe.prototype.rgb=function(e){return e===void 0&&(e=!0),e===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(va)},Qe.prototype.rgba=function(e){return e===void 0&&(e=!0),this._rgb.slice(0,4).map(function(t,a){return a<3?e===!1?t:va(t):t})},eo.rgb=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Qe,[null].concat(e,["rgb"])))},ga.format.rgb=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=ma(e,"rgba");return a[3]===void 0&&(a[3]=1),a},ga.autodetect.push({p:3,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=ma(e,"rgba"),ba(e)==="array"&&(e.length===3||e.length===4&&ba(e[3])=="number"&&e[3]>=0&&e[3]<=1))return"rgb"}});var Ae=Math.log,ya=function(e){var t,a,n,o=e/100;return o<66?(t=255,a=o<6?0:-155.25485562709179-.44596950469579133*(a=o-2)+104.49216199393888*Ae(a),n=o<20?0:.8274096064007395*(n=o-10)-254.76935184120902+115.67994401066147*Ae(n)):(t=351.97690566805693+.114206453784165*(t=o-55)-40.25366309332127*Ae(t),a=325.4494125711974+.07943456536662342*(a=o-50)-28.0852963507957*Ae(a),n=255),[t,a,n,1]},to=ya,ao=d.unpack,no=Math.round,ro=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a,n=ao(e,"rgb"),o=n[0],i=n[2],r=1e3,s=4e4,l=.4;s-r>l;){var u=to(a=.5*(s+r));u[2]/u[0]>=i/o?s=a:r=a}return no(a)},Ue=V,Ce=$,Ye=L,oo=ro;Ce.prototype.temp=Ce.prototype.kelvin=Ce.prototype.temperature=function(){return oo(this._rgb)},Ue.temp=Ue.kelvin=Ue.temperature=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ce,[null].concat(e,["temp"])))},Ye.format.temp=Ye.format.kelvin=Ye.format.temperature=ya;var io=d.unpack,Je=Math.cbrt,so=Math.pow,lo=Math.sign,wa=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=io(e,"rgb"),n=a[0],o=a[1],i=a[2],r=[Ke(n/255),Ke(o/255),Ke(i/255)],s=r[0],l=r[1],u=r[2],f=Je(.4122214708*s+.5363325363*l+.0514459929*u),b=Je(.2119034982*s+.6806995451*l+.1073969566*u),w=Je(.0883024619*s+.2817188376*l+.6299787005*u);return[.2104542553*f+.793617785*b-.0040720468*w,1.9779984951*f-2.428592205*b+.4505937099*w,.0259040371*f+.7827717662*b-.808675766*w]};function Ke(e){var t=Math.abs(e);return t<.04045?e/12.92:(lo(e)||1)*so((t+.055)/1.055,2.4)}var co=d.unpack,Ne=Math.pow,uo=Math.sign,_a=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=co(e,"lab"))[0],n=e[1],o=e[2],i=Ne(a+.3963377774*n+.2158037573*o,3),r=Ne(a-.1055613458*n-.0638541728*o,3),s=Ne(a-.0894841775*n-1.291485548*o,3);return[255*Ze(4.0767416621*i-3.3077115913*r+.2309699292*s),255*Ze(-1.2684380046*i+2.6097574011*r-.3413193965*s),255*Ze(-.0041960863*i-.7034186147*r+1.707614701*s),e.length>3?e[3]:1]};function Ze(e){var t=Math.abs(e);return t>.0031308?(uo(e)||1)*(1.055*Ne(t,1/2.4)-.055):12.92*e}var fo=d.unpack,ho=d.type,po=V,ka=$,xa=L,go=wa;ka.prototype.oklab=function(){return go(this._rgb)},po.oklab=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(ka,[null].concat(e,["oklab"])))},xa.format.oklab=_a,xa.autodetect.push({p:3,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=fo(e,"oklab"),ho(e)==="array"&&e.length===3)return"oklab"}});var mo=d.unpack,bo=wa,vo=ia,yo=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=mo(e,"rgb"),n=a[0],o=a[1],i=a[2],r=bo(n,o,i),s=r[0],l=r[1],u=r[2];return vo(s,l,u)},wo=d.unpack,_o=sa,ko=_a,xo=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=wo(e,"lch"))[0],n=e[1],o=e[2],i=_o(a,n,o),r=i[0],s=i[1],l=i[2],u=ko(r,s,l),f=u[0],b=u[1],w=u[2];return[f,b,w,e.length>3?e[3]:1]},$o=d.unpack,Mo=d.type,Fo=V,$a=$,Ma=L,Eo=yo;$a.prototype.oklch=function(){return Eo(this._rgb)},Fo.oklch=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply($a,[null].concat(e,["oklch"])))},Ma.format.oklch=xo,Ma.autodetect.push({p:3,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=$o(e,"oklch"),Mo(e)==="array"&&e.length===3)return"oklch"}});var Fa=$,Ao=d.type;Fa.prototype.alpha=function(e,t){return t===void 0&&(t=!1),e!==void 0&&Ao(e)==="number"?t?(this._rgb[3]=e,this):new Fa([this._rgb[0],this._rgb[1],this._rgb[2],e],"rgb"):this._rgb[3]},$.prototype.clipped=function(){return this._rgb._clipped||!1};var oe=$,Co=Fe;oe.prototype.darken=function(e){e===void 0&&(e=1);var t=this.lab();return t[0]-=Co.Kn*e,new oe(t,"lab").alpha(this.alpha(),!0)},oe.prototype.brighten=function(e){return e===void 0&&(e=1),this.darken(-e)},oe.prototype.darker=oe.prototype.darken,oe.prototype.brighter=oe.prototype.brighten,$.prototype.get=function(e){var t=e.split("."),a=t[0],n=t[1],o=this[a]();if(n){var i=a.indexOf(n)-(a.substr(0,2)==="ok"?2:0);if(i>-1)return o[i];throw new Error("unknown channel "+n+" in mode "+a)}return o};var pe=$,No=d.type,Do=Math.pow;pe.prototype.luminance=function(e){if(e!==void 0&&No(e)==="number"){if(e===0)return new pe([0,0,0,this._rgb[3]],"rgb");if(e===1)return new pe([255,255,255,this._rgb[3]],"rgb");var t=this.luminance(),a=20,n=function(i,r){var s=i.interpolate(r,.5,"rgb"),l=s.luminance();return Math.abs(e-l)<1e-7||!a--?s:l>e?n(i,s):n(s,r)},o=(t>e?n(new pe([0,0,0]),this):n(this,new pe([255,255,255]))).rgb();return new pe(o.concat([this._rgb[3]]))}return Po.apply(void 0,this._rgb.slice(0,3))};var Po=function(e,t,a){return .2126*(e=Xe(e))+.7152*(t=Xe(t))+.0722*(a=Xe(a))},Xe=function(e){return(e/=255)<=.03928?e/12.92:Do((e+.055)/1.055,2.4)},J={},Ea=$,Aa=d.type,De=J,Ca=function(e,t,a){a===void 0&&(a=.5);for(var n=[],o=arguments.length-3;o-- >0;)n[o]=arguments[o+3];var i=n[0]||"lrgb";if(De[i]||n.length||(i=Object.keys(De)[0]),!De[i])throw new Error("interpolation mode "+i+" is not defined");return Aa(e)!=="object"&&(e=new Ea(e)),Aa(t)!=="object"&&(t=new Ea(t)),De[i](e,t,a).alpha(e.alpha()+a*(t.alpha()-e.alpha()))},Na=$,So=Ca;Na.prototype.mix=Na.prototype.interpolate=function(e,t){t===void 0&&(t=.5);for(var a=[],n=arguments.length-2;n-- >0;)a[n]=arguments[n+2];return So.apply(void 0,[this,e,t].concat(a))};var Da=$;Da.prototype.premultiply=function(e){e===void 0&&(e=!1);var t=this._rgb,a=t[3];return e?(this._rgb=[t[0]*a,t[1]*a,t[2]*a,a],this):new Da([t[0]*a,t[1]*a,t[2]*a,a],"rgb")};var et=$,Io=Fe;et.prototype.saturate=function(e){e===void 0&&(e=1);var t=this.lch();return t[1]+=Io.Kn*e,t[1]<0&&(t[1]=0),new et(t,"lch").alpha(this.alpha(),!0)},et.prototype.desaturate=function(e){return e===void 0&&(e=1),this.saturate(-e)};var Pa=$,Sa=d.type;Pa.prototype.set=function(e,t,a){a===void 0&&(a=!1);var n=e.split("."),o=n[0],i=n[1],r=this[o]();if(i){var s=o.indexOf(i)-(o.substr(0,2)==="ok"?2:0);if(s>-1){if(Sa(t)=="string")switch(t.charAt(0)){case"+":case"-":r[s]+=+t;break;case"*":r[s]*=+t.substr(1);break;case"/":r[s]/=+t.substr(1);break;default:r[s]=+t}else{if(Sa(t)!=="number")throw new Error("unsupported value for Color.set");r[s]=t}var l=new Pa(r,o);return a?(this._rgb=l._rgb,this):l}throw new Error("unknown channel "+i+" in mode "+o)}return r};var Oo=$;J.rgb=function(e,t,a){var n=e._rgb,o=t._rgb;return new Oo(n[0]+a*(o[0]-n[0]),n[1]+a*(o[1]-n[1]),n[2]+a*(o[2]-n[2]),"rgb")};var Bo=$,tt=Math.sqrt,ge=Math.pow;J.lrgb=function(e,t,a){var n=e._rgb,o=n[0],i=n[1],r=n[2],s=t._rgb,l=s[0],u=s[1],f=s[2];return new Bo(tt(ge(o,2)*(1-a)+ge(l,2)*a),tt(ge(i,2)*(1-a)+ge(u,2)*a),tt(ge(r,2)*(1-a)+ge(f,2)*a),"rgb")};var Ro=$;J.lab=function(e,t,a){var n=e.lab(),o=t.lab();return new Ro(n[0]+a*(o[0]-n[0]),n[1]+a*(o[1]-n[1]),n[2]+a*(o[2]-n[2]),"lab")};var To=$,me=function(e,t,a,n){var o,i,r,s,l,u,f,b,w,y,g,k,_;return n==="hsl"?(r=e.hsl(),s=t.hsl()):n==="hsv"?(r=e.hsv(),s=t.hsv()):n==="hcg"?(r=e.hcg(),s=t.hcg()):n==="hsi"?(r=e.hsi(),s=t.hsi()):n==="lch"||n==="hcl"?(n="hcl",r=e.hcl(),s=t.hcl()):n==="oklch"&&(r=e.oklch().reverse(),s=t.oklch().reverse()),n.substr(0,1)!=="h"&&n!=="oklch"||(l=(o=r)[0],f=o[1],w=o[2],u=(i=s)[0],b=i[1],y=i[2]),isNaN(l)||isNaN(u)?isNaN(l)?isNaN(u)?k=Number.NaN:(k=u,w!=1&&w!=0||n=="hsv"||(g=b)):(k=l,y!=1&&y!=0||n=="hsv"||(g=f)):k=l+a*(u>l&&u-l>180?u-(l+360):u<l&&l-u>180?u+360-l:u-l),g===void 0&&(g=f+a*(b-f)),_=w+a*(y-w),new To(n==="oklch"?[_,g,k]:[k,g,_],n)},Lo=me,Ia=function(e,t,a){return Lo(e,t,a,"lch")};J.lch=Ia,J.hcl=Ia;var qo=$;J.num=function(e,t,a){var n=e.num(),o=t.num();return new qo(n+a*(o-n),"num")};var Go=me;J.hcg=function(e,t,a){return Go(e,t,a,"hcg")};var jo=me;J.hsi=function(e,t,a){return jo(e,t,a,"hsi")};var Vo=me;J.hsl=function(e,t,a){return Vo(e,t,a,"hsl")};var Wo=me;J.hsv=function(e,t,a){return Wo(e,t,a,"hsv")};var Ho=$;J.oklab=function(e,t,a){var n=e.oklab(),o=t.oklab();return new Ho(n[0]+a*(o[0]-n[0]),n[1]+a*(o[1]-n[1]),n[2]+a*(o[2]-n[2]),"oklab")};var zo=me;J.oklch=function(e,t,a){return zo(e,t,a,"oklch")};var at=$,Qo=d.clip_rgb,nt=Math.pow,rt=Math.sqrt,ot=Math.PI,Oa=Math.cos,Ba=Math.sin,Uo=Math.atan2,Yo=function(e,t){for(var a=e.length,n=[0,0,0,0],o=0;o<e.length;o++){var i=e[o],r=t[o]/a,s=i._rgb;n[0]+=nt(s[0],2)*r,n[1]+=nt(s[1],2)*r,n[2]+=nt(s[2],2)*r,n[3]+=s[3]*r}return n[0]=rt(n[0]),n[1]=rt(n[1]),n[2]=rt(n[2]),n[3]>.9999999&&(n[3]=1),new at(Qo(n))},K=V,be=d.type,Jo=Math.pow,it=function(e){var t="rgb",a=K("#ccc"),n=0,o=[0,1],i=[],r=[0,0],s=!1,l=[],u=!1,f=0,b=1,w=!1,y={},g=!0,k=1,_=function(h){if((h=h||["#fff","#000"])&&be(h)==="string"&&K.brewer&&K.brewer[h.toLowerCase()]&&(h=K.brewer[h.toLowerCase()]),be(h)==="array"){h.length===1&&(h=[h[0],h[0]]),h=h.slice(0);for(var x=0;x<h.length;x++)h[x]=K(h[x]);i.length=0;for(var C=0;C<h.length;C++)i.push(C/(h.length-1))}return H(),l=h},P=function(h){return h},N=function(h){return h},j=function(h,x){var C,M;if(x==null&&(x=!1),isNaN(h)||h===null)return a;if(x)M=h;else if(s&&s.length>2){var Q=function(B){if(s!=null){for(var O=s.length-1,U=0;U<O&&B>=s[U];)U++;return U-1}return 0}(h);M=Q/(s.length-2)}else M=b!==f?(h-f)/(b-f):1;M=N(M),x||(M=P(M)),k!==1&&(M=Jo(M,k)),M=r[0]+M*(1-r[0]-r[1]),M=Math.min(1,Math.max(0,M));var q=Math.floor(1e4*M);if(g&&y[q])C=y[q];else{if(be(l)==="array")for(var S=0;S<i.length;S++){var D=i[S];if(M<=D){C=l[S];break}if(M>=D&&S===i.length-1){C=l[S];break}if(M>D&&M<i[S+1]){M=(M-D)/(i[S+1]-D),C=K.interpolate(l[S],l[S+1],M,t);break}}else be(l)==="function"&&(C=l(M));g&&(y[q]=C)}return C},H=function(){return y={}};_(e);var E=function(h){var x=K(j(h));return u&&x[u]?x[u]():x};return E.classes=function(h){if(h!=null){if(be(h)==="array")s=h,o=[h[0],h[h.length-1]];else{var x=K.analyze(o);s=h===0?[x.min,x.max]:K.limits(x,"e",h)}return E}return s},E.domain=function(h){if(!arguments.length)return o;f=h[0],b=h[h.length-1],i=[];var x=l.length;if(h.length===x&&f!==b)for(var C=0,M=Array.from(h);C<M.length;C+=1){var Q=M[C];i.push((Q-f)/(b-f))}else{for(var q=0;q<x;q++)i.push(q/(x-1));if(h.length>2){var S=h.map(function(B,O){return O/(h.length-1)}),D=h.map(function(B){return(B-f)/(b-f)});D.every(function(B,O){return S[O]===B})||(N=function(B){if(B<=0||B>=1)return B;for(var O=0;B>=D[O+1];)O++;var U=(B-D[O])/(D[O+1]-D[O]);return S[O]+U*(S[O+1]-S[O])})}}return o=[f,b],E},E.mode=function(h){return arguments.length?(t=h,H(),E):t},E.range=function(h,x){return _(h),E},E.out=function(h){return u=h,E},E.spread=function(h){return arguments.length?(n=h,E):n},E.correctLightness=function(h){return h==null&&(h=!0),w=h,H(),P=w?function(x){for(var C=j(0,!0).lab()[0],M=j(1,!0).lab()[0],Q=C>M,q=j(x,!0).lab()[0],S=C+(M-C)*x,D=q-S,B=0,O=1,U=20;Math.abs(D)>.01&&U-- >0;)Q&&(D*=-1),D<0?(B=x,x+=.5*(O-x)):(O=x,x+=.5*(B-x)),q=j(x,!0).lab()[0],D=q-S;return x}:function(x){return x},E},E.padding=function(h){return h!=null?(be(h)==="number"&&(h=[h,h]),r=h,E):r},E.colors=function(h,x){arguments.length<2&&(x="hex");var C=[];if(arguments.length===0)C=l.slice(0);else if(h===1)C=[E(.5)];else if(h>1){var M=o[0],Q=o[1]-M;C=Ko(0,h,!1).map(function(O){return E(M+O/(h-1)*Q)})}else{e=[];var q=[];if(s&&s.length>2)for(var S=1,D=s.length,B=1<=D;B?S<D:S>D;B?S++:S--)q.push(.5*(s[S-1]+s[S]));else q=o;C=q.map(function(O){return E(O)})}return K[x]&&(C=C.map(function(O){return O[x]()})),C},E.cache=function(h){return h!=null?(g=h,E):g},E.gamma=function(h){return h!=null?(k=h,E):k},E.nodata=function(h){return h!=null?(a=K(h),E):a},E};function Ko(e,t,a){for(var n=[],o=e<t,i=a?o?t+1:t-1:t,r=e;o?r<i:r>i;o?r++:r--)n.push(r);return n}var _e=$,Zo=it,st=V,Z=function(e,t,a){if(!Z[a])throw new Error("unknown blend mode "+a);return Z[a](e,t)},ae=function(e){return function(t,a){var n=st(a).rgb(),o=st(t).rgb();return st.rgb(e(n,o))}},ne=function(e){return function(t,a){var n=[];return n[0]=e(t[0],a[0]),n[1]=e(t[1],a[1]),n[2]=e(t[2],a[2]),n}};Z.normal=ae(ne(function(e){return e})),Z.multiply=ae(ne(function(e,t){return e*t/255})),Z.screen=ae(ne(function(e,t){return 255*(1-(1-e/255)*(1-t/255))})),Z.overlay=ae(ne(function(e,t){return t<128?2*e*t/255:255*(1-2*(1-e/255)*(1-t/255))})),Z.darken=ae(ne(function(e,t){return e>t?t:e})),Z.lighten=ae(ne(function(e,t){return e>t?e:t})),Z.dodge=ae(ne(function(e,t){return e===255||(e=t/255*255/(1-e/255))>255?255:e})),Z.burn=ae(ne(function(e,t){return 255*(1-(1-t/255)/(e/255))}));for(var Xo=Z,lt=d.type,ei=d.clip_rgb,ti=d.TWOPI,ai=Math.pow,ni=Math.sin,ri=Math.cos,Ra=V,oi=$,ii=Math.floor,si=Math.random,ct=F,Ta=Math.log,li=Math.pow,ci=Math.floor,ui=Math.abs,La=function(e,t){t===void 0&&(t=null);var a={min:Number.MAX_VALUE,max:-1*Number.MAX_VALUE,sum:0,values:[],count:0};return ct(e)==="object"&&(e=Object.values(e)),e.forEach(function(n){t&&ct(n)==="object"&&(n=n[t]),n==null||isNaN(n)||(a.values.push(n),a.sum+=n,n<a.min&&(a.min=n),n>a.max&&(a.max=n),a.count+=1)}),a.domain=[a.min,a.max],a.limits=function(n,o){return qa(a,n,o)},a},qa=function(e,t,a){t===void 0&&(t="equal"),a===void 0&&(a=7),ct(e)=="array"&&(e=La(e));var n=e.min,o=e.max,i=e.values.sort(function(ht,pt){return ht-pt});if(a===1)return[n,o];var r=[];if(t.substr(0,1)==="c"&&(r.push(n),r.push(o)),t.substr(0,1)==="e"){r.push(n);for(var s=1;s<a;s++)r.push(n+s/a*(o-n));r.push(o)}else if(t.substr(0,1)==="l"){if(n<=0)throw new Error("Logarithmic scales are only possible for values > 0");var l=Math.LOG10E*Ta(n),u=Math.LOG10E*Ta(o);r.push(n);for(var f=1;f<a;f++)r.push(li(10,l+f/a*(u-l)));r.push(o)}else if(t.substr(0,1)==="q"){r.push(n);for(var b=1;b<a;b++){var w=(i.length-1)*b/a,y=ci(w);if(y===w)r.push(i[y]);else{var g=w-y;r.push(i[y]*(1-g)+i[y+1]*g)}}r.push(o)}else if(t.substr(0,1)==="k"){var k,_=i.length,P=new Array(_),N=new Array(a),j=!0,H=0,E=null;(E=[]).push(n);for(var h=1;h<a;h++)E.push(n+h/a*(o-n));for(E.push(o);j;){for(var x=0;x<a;x++)N[x]=0;for(var C=0;C<_;C++)for(var M=i[C],Q=Number.MAX_VALUE,q=void 0,S=0;S<a;S++){var D=ui(E[S]-M);D<Q&&(Q=D,q=S),N[q]++,P[C]=q}for(var B=new Array(a),O=0;O<a;O++)B[O]=null;for(var U=0;U<_;U++)B[k=P[U]]===null?B[k]=i[U]:B[k]+=i[U];for(var ie=0;ie<a;ie++)B[ie]*=1/N[ie];j=!1;for(var se=0;se<a;se++)if(B[se]!==E[se]){j=!0;break}E=B,++H>200&&(j=!1)}for(var le={},ke=0;ke<a;ke++)le[ke]=[];for(var ve=0;ve<_;ve++)le[k=P[ve]].push(i[ve]);for(var X=[],xe=0;xe<a;xe++)X.push(le[xe][0]),X.push(le[xe][le[xe].length-1]);X=X.sort(function(ht,pt){return ht-pt}),r.push(X[0]);for(var ft=1;ft<X.length;ft+=2){var dt=X[ft];isNaN(dt)||r.indexOf(dt)!==-1||r.push(dt)}}return r},Ga={analyze:La,limits:qa},ja=$,Va=$,te=Math.sqrt,W=Math.pow,fi=Math.min,di=Math.max,Wa=Math.atan2,Ha=Math.abs,Pe=Math.cos,za=Math.sin,hi=Math.exp,Qa=Math.PI,Ua=$,pi=$,Ya=V,Ja=it,gi={cool:function(){return Ja([Ya.hsl(180,1,.9),Ya.hsl(250,.7,.4)])},hot:function(){return Ja(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Se={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},ut=0,Ka=Object.keys(Se);ut<Ka.length;ut+=1){var Za=Ka[ut];Se[Za.toLowerCase()]=Se[Za]}var mi=Se,z=V;return z.average=function(e,t,a){t===void 0&&(t="lrgb"),a===void 0&&(a=null);var n=e.length;a||(a=Array.from(new Array(n)).map(function(){return 1}));var o=n/a.reduce(function(k,_){return k+_});if(a.forEach(function(k,_){a[_]*=o}),e=e.map(function(k){return new at(k)}),t==="lrgb")return Yo(e,a);for(var i=e.shift(),r=i.get(t),s=[],l=0,u=0,f=0;f<r.length;f++)if(r[f]=(r[f]||0)*a[0],s.push(isNaN(r[f])?0:a[0]),t.charAt(f)==="h"&&!isNaN(r[f])){var b=r[f]/180*ot;l+=Oa(b)*a[0],u+=Ba(b)*a[0]}var w=i.alpha()*a[0];e.forEach(function(k,_){var P=k.get(t);w+=k.alpha()*a[_+1];for(var N=0;N<r.length;N++)if(!isNaN(P[N]))if(s[N]+=a[_+1],t.charAt(N)==="h"){var j=P[N]/180*ot;l+=Oa(j)*a[_+1],u+=Ba(j)*a[_+1]}else r[N]+=P[N]*a[_+1]});for(var y=0;y<r.length;y++)if(t.charAt(y)==="h"){for(var g=Uo(u/s[y],l/s[y])/ot*180;g<0;)g+=360;for(;g>=360;)g-=360;r[y]=g}else r[y]=r[y]/s[y];return w/=n,new at(r,t).alpha(w>.99999?1:w,!0)},z.bezier=function(e){var t=function(a){var n,o,i,r,s,l,u;if((a=a.map(function(g){return new _e(g)})).length===2)n=a.map(function(g){return g.lab()}),s=n[0],l=n[1],r=function(g){var k=[0,1,2].map(function(_){return s[_]+g*(l[_]-s[_])});return new _e(k,"lab")};else if(a.length===3)o=a.map(function(g){return g.lab()}),s=o[0],l=o[1],u=o[2],r=function(g){var k=[0,1,2].map(function(_){return(1-g)*(1-g)*s[_]+2*(1-g)*g*l[_]+g*g*u[_]});return new _e(k,"lab")};else if(a.length===4){var f;i=a.map(function(g){return g.lab()}),s=i[0],l=i[1],u=i[2],f=i[3],r=function(g){var k=[0,1,2].map(function(_){return(1-g)*(1-g)*(1-g)*s[_]+3*(1-g)*(1-g)*g*l[_]+3*(1-g)*g*g*u[_]+g*g*g*f[_]});return new _e(k,"lab")}}else{if(!(a.length>=5))throw new RangeError("No point in running bezier with only one color.");var b,w,y;b=a.map(function(g){return g.lab()}),y=a.length-1,w=function(g){for(var k=[1,1],_=1;_<g;_++){for(var P=[1],N=1;N<=k.length;N++)P[N]=(k[N]||0)+k[N-1];k=P}return k}(y),r=function(g){var k=1-g,_=[0,1,2].map(function(P){return b.reduce(function(N,j,H){return N+w[H]*Math.pow(k,y-H)*Math.pow(g,H)*j[P]},0)});return new _e(_,"lab")}}return r}(e);return t.scale=function(){return Zo(t)},t},z.blend=Xo,z.cubehelix=function(e,t,a,n,o){e===void 0&&(e=300),t===void 0&&(t=-1.5),a===void 0&&(a=1),n===void 0&&(n=1),o===void 0&&(o=[0,1]);var i,r=0;lt(o)==="array"?i=o[1]-o[0]:(i=0,o=[o,o]);var s=function(l){var u=ti*((e+120)/360+t*l),f=ai(o[0]+i*l,n),b=(r!==0?a[0]+l*r:a)*f*(1-f)/2,w=ri(u),y=ni(u);return Ra(ei([255*(f+b*(-.14861*w+1.78277*y)),255*(f+b*(-.29227*w-.90649*y)),255*(f+b*(1.97294*w)),1]))};return s.start=function(l){return l==null?e:(e=l,s)},s.rotations=function(l){return l==null?t:(t=l,s)},s.gamma=function(l){return l==null?n:(n=l,s)},s.hue=function(l){return l==null?a:(lt(a=l)==="array"?(r=a[1]-a[0])===0&&(a=a[1]):r=0,s)},s.lightness=function(l){return l==null?o:(lt(l)==="array"?(o=l,i=l[1]-l[0]):(o=[l,l],i=0),s)},s.scale=function(){return Ra.scale(s)},s.hue(a),s},z.mix=z.interpolate=Ca,z.random=function(){for(var e="#",t=0;t<6;t++)e+="0123456789abcdef".charAt(ii(16*si()));return new oi(e,"hex")},z.scale=it,z.analyze=Ga.analyze,z.contrast=function(e,t){e=new ja(e),t=new ja(t);var a=e.luminance(),n=t.luminance();return a>n?(a+.05)/(n+.05):(n+.05)/(a+.05)},z.deltaE=function(e,t,a,n,o){a===void 0&&(a=1),n===void 0&&(n=1),o===void 0&&(o=1);var i=function(X){return 360*X/(2*Qa)},r=function(X){return 2*Qa*X/360};e=new Va(e),t=new Va(t);var s=Array.from(e.lab()),l=s[0],u=s[1],f=s[2],b=Array.from(t.lab()),w=b[0],y=b[1],g=b[2],k=(l+w)/2,_=(te(W(u,2)+W(f,2))+te(W(y,2)+W(g,2)))/2,P=.5*(1-te(W(_,7)/(W(_,7)+W(25,7)))),N=u*(1+P),j=y*(1+P),H=te(W(N,2)+W(f,2)),E=te(W(j,2)+W(g,2)),h=(H+E)/2,x=i(Wa(f,N)),C=i(Wa(g,j)),M=x>=0?x:x+360,Q=C>=0?C:C+360,q=Ha(M-Q)>180?(M+Q+360)/2:(M+Q)/2,S=1-.17*Pe(r(q-30))+.24*Pe(r(2*q))+.32*Pe(r(3*q+6))-.2*Pe(r(4*q-63)),D=Q-M;D=Ha(D)<=180?D:Q<=M?D+360:D-360,D=2*te(H*E)*za(r(D)/2);var B=w-l,O=E-H,U=1+.015*W(k-50,2)/te(20+W(k-50,2)),ie=1+.045*h,se=1+.015*h*S,le=30*hi(-W((q-275)/25,2)),ke=-(2*te(W(h,7)/(W(h,7)+W(25,7))))*za(2*r(le)),ve=te(W(B/(a*U),2)+W(O/(n*ie),2)+W(D/(o*se),2)+ke*(O/(n*ie))*(D/(o*se)));return di(0,fi(100,ve))},z.distance=function(e,t,a){a===void 0&&(a="lab"),e=new Ua(e),t=new Ua(t);var n=e.get(a),o=t.get(a),i=0;for(var r in n){var s=(n[r]||0)-(o[r]||0);i+=s*s}return Math.sqrt(i)},z.limits=Ga.limits,z.valid=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];try{return new(Function.prototype.bind.apply(pi,[null].concat(e))),!0}catch{return!1}},z.scales=gi,z.colors=fa,z.brewer=mi,z})});var gt=[{key:"black hot",name:"Black hot",steps:[{color:"#F5F5F5",value:0},{color:"#242124",value:1}],type:"relative"},{device_class:"carbon_dioxide",documentation:{text:`<p>CO\u2082 levels reflect the amount of fresh air in a space. High levels
indicate insufficient ventilation. The specific effects of higher
concentrations of CO\u2082 are highly individual, but studies have shown
that levels over 1000 ppm cause cognitive impairment in many
individuals.</p>
<p>Levels over 2000 ppm have been linked to health effects in some
studies. There is no conclusive sum of evidence.</p>
<p>This scale caps at 3000 ppm, as a maximum level that'd signify
fairly bad air. Levels above 5000 ppm are considered dangerous
in workplace standards (f.x OSHA in the US) and are indicative
of greatly insufficient ventilation overall.</p>`},key:"carbon dioxide",name:"CO\u2082, indoor exposure",steps:[{color:"#6d9b17",value:520},{color:"#FFBF00",value:1e3},{color:"#cf0000",value:1400},{color:"#5b0f8c",value:3e3}],type:"absolute"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl bugn",name:"ColorBrewer 5-class BuGn",steps:[{color:"#edf8fb",value:0},{color:"#b2e2e2",value:.25},{color:"#66c2a4",value:.5},{color:"#2ca25f",value:.75},{color:"#006d2c",value:1}],type:"relative"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl bupu",name:"ColorBrewer 5-class BuPu",steps:[{color:"#edf8fb",value:0},{color:"#b3cde3",value:.25},{color:"#8c96c6",value:.5},{color:"#8856a7",value:.75},{color:"#810f7c",value:1}],type:"relative"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl rdpu",name:"ColorBrewer 5-class BuPu",steps:[{color:"#feebe2",value:0},{color:"#fbb4b9",value:.25},{color:"#f768a1",value:.5},{color:"#c51b8a",value:.75},{color:"#7a0177",value:1}],type:"relative"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl ylorbr",name:"ColorBrewer 5-class YlOrBr",steps:[{color:"#ffffd4",value:0},{color:"#fed98e",value:.25},{color:"#fe9929",value:.5},{color:"#d95f0e",value:.75},{color:"#993404",value:1}],type:"relative"},{device_class:"temperature",documentation:{text:`<p>Indoor temperatures related to human comfort levels. Amalgation
of multiple sources. As always with temperature, individual
factors such as generics, clothing and activity level have a big
impact.</p>`},key:"indoor temperature",name:"Indoor temperature",steps:[{color:"#0f3489",value:12},{color:"#595ea3",value:16},{color:"#7374b0",value:18},{color:"#F5F5F5",value:20},{color:"#F5F5F5",value:22},{color:"#ea755a",value:24},{color:"#cf0000",value:28}],type:"absolute",unit:"\xB0C"},{key:"iron red",name:"Iron red",steps:[{color:"#230382",value:0},{color:"#921C96",value:.1},{color:"#C93F55",value:.25},{color:"#DF6D2D",value:.4},{color:"#EFB03D",value:.6},{color:"#F9DE52",value:.75},{color:"#F5F5D4",value:1}],type:"relative"},{device_class:"nitrogen_dioxide",documentation:{text:`<p>This scale is based on the European Environment Agency (EEA) Air Quality Index
as implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>
as of late 2024.</p>`},key:"nitrogen dioxide eaqi",name:"Nitrogen dioxide (European Air Quality Index)",steps:[{color:"#50F0E6",legend:"Good",value:0},{color:"#50CCAA",legend:"Fair",value:40},{color:"#F0E641",legend:"Moderate",value:90},{color:"#FF5050",legend:"Poor",value:120},{color:"#960032",legend:"Very poor",value:230},{color:"#7D2181",legend:"Extremely poor",value:340}],type:"absolute",unit:"\xB5g/m\xB3"},{device_class:"temperature",documentation:{text:`<p>Outdoor temperatures related to human comfort and risk levels.</p>
<p>Note that this works best when using apparent (or <a href="https://en.wikipedia.org/wiki/Wet-bulb_temperature" rel="noopener" target="_blank">wet bulb</a>)
temperature and taking wind chill into account, not just <a href="https://en.wikipedia.org/wiki/Dry-bulb_temperature" rel="noopener" target="_blank">dry bulb</a>
temperature, such as a like a thermometer reading.</p>
<p>Individual factors such as clothing, activity level, wind speed and
exposure to sun all play a part in how we perceive temperature.
See this is a rough guideline.</p>`},key:"outdoor temperature",name:"Outdoor temperature",steps:[{color:"#0f3489",legend:"Severe risk of frostbite",value:-30},{color:"#595ea3",legend:"Risk of frostbite",value:0},{color:"#7374b0",legend:"Risk of hypothermia",value:10},{color:"#7374b0",legend:"Chilling temperatures",value:15},{color:"#F5F5F5",value:22},{color:"#F5F5F5",value:27},{color:"#ea755a",legend:"Risk of heat cramps or exhaustion",value:32},{color:"#cf0000",legend:"Heat exhaustion more likely",value:40},{color:"#5b0f8c",legend:"Heat stroke risk",value:54}],type:"absolute",unit:"\xB0C"},{device_class:"temperature",documentation:{text:`<p>Temperature scale specifically designed for oceanic climates - regions characterized 
by mild temperatures with rare extremes throughout the year.</p>
<p>Found in areas such as Western Europe, the Pacific Northwest of North America, 
parts of Southern Chile, New Zealand, and other coastal regions under maritime influence.</p>`},key:"outdoor temperature oceanic",name:"Outdoor temperature (Oceanic Climate)",steps:[{color:"#112488",legend:"Exceptionally cold for oceanic climate",value:-10},{color:"#1846A1",legend:"Very cold for oceanic climate",value:-5},{color:"#1F67C0",legend:"Freezing",value:0},{color:"#4CA9D5",legend:"Cold",value:5},{color:"#81DB7D",legend:"Cool",value:10},{color:"#B5DA60",legend:"Mild",value:15},{color:"#E0DD4A",legend:"Pleasant",value:20},{color:"#F98F46",legend:"Warm",value:25},{color:"#F5392A",legend:"Very warm for oceanic climate",value:30},{color:"#BE31B1",legend:"Exceptionally hot for oceanic climate",value:35}],type:"absolute",unit:"\xB0C"},{device_class:"ozone",documentation:{text:`<p>This scale is based on the European Environment Agency (EEA) Air Quality Index
as implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>
as of late 2024.</p>`},key:"ozone eaqi",name:"Ozone (European Air Quality Index)",steps:[{color:"#50F0E6",legend:"Good",value:0},{color:"#50CCAA",legend:"Fair",value:50},{color:"#F0E641",legend:"Moderate",value:100},{color:"#FF5050",legend:"Poor",value:130},{color:"#960032",legend:"Very poor",value:240},{color:"#7D2181",legend:"Extremely poor",value:380}],type:"absolute",unit:"\xB5g/m\xB3"},{device_class:"pm10",documentation:{text:`<p>This scale is based on the European Environment Agency (EEA) Air Quality Index
as implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>
as of late 2024.</p>`},key:"pm10 eaqi",name:"PM10 (European Air Quality Index)",steps:[{color:"#50F0E6",legend:"Good",value:0},{color:"#50CCAA",legend:"Fair",value:20},{color:"#F0E641",legend:"Moderate",value:40},{color:"#FF5050",legend:"Poor",value:50},{color:"#960032",legend:"Very poor",value:100},{color:"#7D2181",legend:"Extremely poor",value:150}],type:"absolute",unit:"\xB5g/m\xB3"},{device_class:"pm25",documentation:{text:`<p>This scale is based on an aggregate of the World Health Organization
<a href="https://www.who.int/publications/i/item/9789240034228" rel="noopener" target="_blank">global air quality guidelines</a> 
and <a href="https://www.who.int/publications/i/item/9789240000278" rel="noopener" target="_blank">Personal interventions and risk communication on Air Pollution</a>
reports.</p>
<p>The lowest part of the range map to the AQG (Air Quality Goal)
target, a PM<sub>2.5</sub> level of &lt;5 \u03BCg/m<sup>3</sup> which is considered relatively safe.
The upper part, &gt;100 \u03BCg/m<sup>3</sup>, is considered the level where the 
health benefits of regular physical activity is greatly offset by the
PM<sub>2.5</sub> exposure.</p>
<p>Note that the level of &lt;5 \u03BCg/m<sup>3</sup> is the AQG exposure
level on an annaul basis. The WHO also has a 24-hour AQG level of
&lt;15 \u03BCg/m<sup>3</sup> which is not included in this scale. As we're
trending patterns over time, the annual target made more sense for
the heatmap.</p>`},key:"pm25",name:"PM2.5 (WHO aggregate)",steps:[{color:"#6d9b17",legend:"AQG level",value:5},{color:"#FFBF00",legend:"Interim target 2",value:25},{color:"#cf0000",value:50},{color:"#5b0f8c",legends:"Risk level",value:100}],type:"absolute",unit:"\xB5g/m\xB3"},{device_class:"pm25",documentation:{text:`<p>This scale is based on the European Environment Agency (EEA) Air Quality Index
as implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>
as of late 2024.</p>`},key:"pm25 eaqi",name:"PM2.5 (European Air Quality Index)",steps:[{color:"#50F0E6",legend:"Good",value:0},{color:"#50CCAA",legend:"Fair",value:10},{color:"#F0E641",legend:"Moderate",value:20},{color:"#FF5050",legend:"Poor",value:25},{color:"#960032",legend:"Very poor",value:50},{color:"#7D2181",legend:"Extremely poor",value:75}],type:"absolute",unit:"\xB5g/m\xB3"},{key:"stoplight",name:"Stoplight",steps:[{color:"#6d9b17",value:0},{color:"#fde74c",value:.5},{color:"#cf0000",value:1}],type:"relative"},{device_class:"sulphur_dioxide",documentation:{text:`<p>This scale is based on the European Environment Agency (EEA) Air Quality Index
as implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>
as of late 2024.</p>`},key:"sulphur dioxide eaqi",name:"Sulphur dioxide (European Air Quality Index)",steps:[{color:"#50F0E6",legend:"Good",value:0},{color:"#50CCAA",legend:"Fair",value:100},{color:"#F0E641",legend:"Moderate",value:200},{color:"#FF5050",legend:"Poor",value:350},{color:"#960032",legend:"Very poor",value:500},{color:"#7D2181",legend:"Extremely poor",value:750}],type:"absolute",unit:"\xB5g/m\xB3"},{key:"white hot",name:"White hot",steps:[{color:"#242124",value:0},{color:"#F5F5F5",value:1}],type:"relative"},{device_class:"temperature",documentation:{license:{name:"Creative Commons Attribution-ShareAlike License 3.0",url:"https://creativecommons.org/licenses/by-sa/3.0/"},text:`<p>Wikipedia's <a href="https://en.wikipedia.org/wiki/Module:Weather" rel="noopener" target="_blank">Weather</a> template temperature graph color scheme, cool2 version.
Slightly modified by setting the minimum to -60\xB0C, instead of -90\xB0C.</p>`},key:"wikipedia climate cool2",name:"Wikipedia climate, cool2",steps:[{color:"#0000A2",value:-60},{color:"#0000D7",value:-43},{color:"#6565FF",value:-24},{color:"#FCFCFF",value:4},{color:"#FF7F00",value:23},{color:"#FF2C00",value:35},{color:"#F60000",value:42},{color:"#000000",value:56}],type:"absolute",unit:"\xB0C"}];var ce={apparent_power:{},atmospheric_pressure:{},aqi:{},battery:{},carbon_dioxide:{default:"carbon dioxide"},carbon_monoxide:{},current:{},date:{},duration:{},energy:{},frequency:{},gas:{},humidity:{},illuminance:{},monetary:{},nitrogen_dioxide:{},nitrogen_monoxide:{},nitrous_oxide:{},ozone:{},pm1:{},pm10:{},pm25:{default:"pm25"},power_factor:{},power:{},pressure:{},reactive_power:{},signal_strength:{},sulphur_dioxide:{},temperature:{default:"outdoor temperature",unit_system:"temperature"},timestamp:{},volatile_organic_compounds:{},voltage:{}};var vt=$i(en()),Ie={temperature:{"\xB0C":{"\xB0F":R=>parseInt(R*1.8+32)},"\xB0F":{"\xB0C":R=>parseInt((R-32)/1.8)}}},ye=class{constructor(){this.default_scale="iron red",this.scale_by_key={};for(let c of gt)this.scale_by_key[c.key]=c}get_scale(c,p="",m={}){if(c===void 0&&(c=this.default_scale),typeof c=="string")return this.generate_scale(this.scale_by_key[c],p,m);var v=this.generate_scale(c,p,m);return delete v.docs,v}generate_scale(c,p=void 0,m={}){let v=JSON.parse(JSON.stringify(c.steps)),A=[],F=[],T=c.unit,G=d=>d;if(c.unit&&p&&m){let d=ce[p].unit_system,L=m[d];d&&L&&c.unit!==L&&Ie[d]&&Ie[d][c.unit]&&Ie[d][c.unit][L]&&(T=L,G=Ie[d][c.unit][L])}for(let d of v)A.push(d.color),"value"in d&&(d.value=G(d.value),F.push(d.value));let I;return F.length>0&&F.length===A.length?I=vt.default.scale(A).domain(F):I=vt.default.scale(A),{gradient:I,type:c.type??"relative",name:c.name,key:c.key,steps:v,unit:T,docs:c.documentation,css:this.legend_css_by_gradient(I)}}legend_css_by_gradient(c){var p=[];for(let[m,v]of c.colors(21).entries())p.push(`${v} ${m*5}%`);return p.join(", ")}defaults_for(c){return c in ce&&"default"in ce[c]?ce[c].default:this.default_scale}get_by(c,p){var m=gt.filter(v=>v[c]===p);return m.map(v=>this.get_scale(v))}};var yt=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),ee=yt.prototype.html,Ei=yt.prototype.css,Oe=class extends yt{last_render_ts=0;scales=new ye;static get properties(){return{hass:{},config:{},grid:[],grid_status:void 0,meta:{},tooltipOpen:!1,selected_element_data:""}}render(){return this.grid===void 0&&(this.grid=[]),ee`
            <ha-card header="${this.meta.title}" id="card">
                <div class="card-content">
                    <table>
                        <thead>
                            <tr class="hr${this.myhass.locale.time_format}">
                                <th class="hm-row-title">${this.myhass.localize("ui.dialogs.helper_settings.input_datetime.date")}</th>
                                ${this.date_table_headers()}
                            </tr>
                        </thead>
                        <tbody>
                    ${this.grid.map((c,p)=>{let m=parseFloat(this.config.row_height),v=Math.round(1/m),A=p%v===0;return ee`<tr style='line-height: ${this.config.row_height};'>
                            <td class="hm-row-title">${A?c.date:""}</td>
                            ${c.vals.map((F,T)=>{var G="hm-box",I=F;if(I===null&&(G+=" null"),this.meta.scale.type==="relative"){let L=this.meta.data.max-this.meta.data.min;I=(F-this.meta.data.min)/L,I<0&&(I=0),I>1&&(I=1)}let d=this.meta.scale.gradient(I);return ee`<td @click="${this.toggle_tooltip}" class="${G}" data-val="${F}" data-row="${p}" data-col="${T}" style="color: ${d}"></td>`})}
                        </tr>`})}
                        </tbody>
                    </table>
                    ${this.render_status()}
                    ${this.render_legend()}
                    ${this.render_tooltip()}
                </div>
            </ha-card>
        `}date_table_headers(){return this.myhass.locale.time_format==="12"?ee`
                <th>12<br/>AM</th><th>·</th><th>·</th><th>·</th><th>4<br/>AM</th><th>·</th><th>·</th><th>·</th>
                <th>8<br/>AM</th><th>·</th><th>·</th><th>·</th><th>12<br/>PM</th><th>·</th><th>·</th><th>·</th>
                <th>4<br/>PM</th><th>·</th><th>·</th><th>·</th><th>8<br/>PM</th><th>·</th><th>·</th><th>11<br/>PM</th>
            `:ee`
                <th>00</th><th>·</th><th>·</th><th>·</th><th>04</th><th>·</th><th>·</th><th>·</th>
                <th>08</th><th>·</th><th>·</th><th>·</th><th>12</th><th>·</th><th>·</th><th>·</th>
                <th>16</th><th>·</th><th>·</th><th>·</th><th>20</th><th>·</th><th>·</th><th>23</th>
            `}render_status(){if(this.grid_status)return ee`<h3>${this.grid_status}</h3>`}render_legend(){if(this.config.display.legend===!1)return;let c=this.legend_scale(this.meta.scale);return ee`
            <div class="legend-container">
                <div id="legend" style="background: linear-gradient(90deg, ${this.meta.scale.css})"></div>
                <div class="tick-container">
                    ${c.map(p=>ee`
                        <div class="legend-tick" style="left: ${p[0]}%;"">
                            <div class="caption">${p[1]} ${this.meta.scale.unit}</div>
                        </div>
                        <span class="legend-shadow">${p[1]} ${this.meta.scale.unit}</span>`)}
                </div>
            </div>
        `}render_tooltip(){var c="";if(this.selected_element_data){let F=this.grid[this.selected_element_data.row]?.date,T=parseInt(this.selected_element_data.col);var p=new Date("2022-03-20 00:00:00").setHours(T),m=new Date("2022-03-20 00:00:00").setHours(T+1),v;this.selected_element_data.val===""?v=this.myhass.localize("ui.components.data-table.no-data"):v=`${+parseFloat(this.selected_element_data.val).toFixed(2)} ${this.meta.scale.unit||this.meta.unit_of_measurement}`;var A=new Intl.DateTimeFormat("sv-SE",{hour:"numeric",minute:"numeric"});this.myhass.locale.time_format=="12"&&(A=new Intl.DateTimeFormat("en-US",{hour:"numeric"})),c=ee`<div class="meta">${F} ${A.format(p)} - ${A.format(m)}</div><div class="value">${v}</div>`}return ee`
            <div id="tooltip" class="${this.tooltipOpen?"active":"hidden"}">${c}</div>
        `}legend_scale(c){var p=[];if(c.type==="relative")for(var m=this.meta.data.max-this.meta.data.min,v=0;v<=5;v++)p.push([v*20,+Number(this.meta.data.min+m/5*v).toFixed(2)]);else{var A=c.steps[0].value,F=c.steps[c.steps.length-1].value,T=F-A;for(let G of c.steps)p.push([(G.value-A)/T*100,G.value])}return p}toggle_tooltip(c){let p=this.renderRoot.querySelector("#selected"),m=this.renderRoot.querySelector("#card"),v=this.renderRoot.querySelector("#tooltip"),A=c.target;if(p&&(p.removeAttribute("id"),p===c.target)){this.tooltipOpen=!1;return}this.tooltipOpen=!0,A.id="selected";var F=A.getBoundingClientRect(),T=m.getBoundingClientRect(),G=F.top-T.top,I=F.left-T.left;v.style.top=(G-50-F.height).toString()+"px",v.style.left=(I-F.width/2-70).toString()+"px",this.selected_element_data=A.dataset}set hass(c){if(!(Date.now()-this.last_render_ts<10*60*1e3)){this.myhass=c,this.meta=this.populate_meta(c);var p=[this.config.entity];this.get_recorder(p,this.config.days),this.last_render_ts=Date.now()}}get_recorder(c,p){let m=new Date;this.grid_status=void 0;var v=new Date(m-p*864e5);v.setHours(23,0,0),this.myhass.callWS({type:"recorder/statistics_during_period",statistic_ids:c,period:"hour",units:{energy:"kWh",temperature:this.myhass.config.unit_system.temperature},start_time:v.toISOString(),types:["sum","mean"]}).then(A=>{for(let F of c){let T=A[F];if(T===void 0){this.grid=[],this.grid_status=this.myhass.localize("ui.components.data-table.no-data");continue}switch(this.meta.state_class){case"measurement":this.grid=this.calculate_measurement_values(T);break;case"total":case"total_increasing":this.grid=this.calculate_increasing_values(T);break;default:throw new Error(`Unknown state_class defined (${this.meta.state_class} for ${F}.`)}}(this.config.data.max===void 0||this.config.data.max==="auto")&&(this.meta.data.max=this.max_from(this.grid)),(this.config.data.min===void 0||this.config.data.min==="auto")&&(this.meta.data.min=this.min_from(this.grid))})}max_from(c){var p=[];for(let m of c)p=p.concat(m.vals);return Math.max(...p)}min_from(c){var p=[];for(let m of c)p=p.concat(m.vals);return Math.min(...p)}calculate_measurement_values(c){var p=[],m=[],v=null,A;for(let F of c){let T=new Date(F.start);A=T.getHours();let G=T.toLocaleDateString(this.meta.language,{month:"short",day:"2-digit"});G!==v&&v!==null&&(m=Array(24).fill(null),p.push({date:G,nativeDate:T,vals:m})),m[A]=F.mean,v=G}return m.splice(A+1),p.reverse()}calculate_increasing_values(c){var p=[],m=null,v=[],A=null,F;for(let G of c){let I=new Date(G.start);F=I.getHours();let d=I.toLocaleDateString(this.meta.language,{month:"short",day:"2-digit"});if(d!==A&&m!==null&&(v=Array(24).fill(0),p.push({date:d,nativeDate:I,vals:v})),m!==null){var T=(G.sum-m).toFixed(2);v[F]=T}m=G.sum,A=d}return v.splice(F+1),p.reverse()}populate_meta(c){let p=c.states[this.config.entity].attributes,m=p.device_class??this.config.device_class;var v={unit_of_measurement:p.unit_of_measurement,state_class:p.state_class,device_class:m,language:c.selectedLanguage??c.language??"en",scale:this.scales.get_scale(this.config.scale??this.scales.defaults_for(m),m,this.myhass.config.unit_system),title:this.config.title??(this.config.title===null?void 0:p.friendly_name),data:{max:this.config.data.max,min:this.config.data.min}};return v}setConfig(c){if(!c.entity)throw new Error("You need to define an entity");if(c.days&&c.days<=0)throw new Error("`days` need to be 1 or higher");if(this.config={title:c.title,days:c.days??21,entity:c.entity,scale:c.scale,row_height:c.row_height??1,data:c.data??{},display:c.display??{}},this.config.data.max!==void 0&&this.config.data.max!=="auto"&&typeof this.config.data.max!="number")throw new Error("`data.max` need to be either `auto` or a number");if(this.config.data.min!==void 0&&this.config.data.min!=="auto"&&typeof this.config.data.min!="number")throw new Error("`data.min` need to be either `auto` or a number");this.last_render_ts=0}getCardSize(){return this.config.days?1+Math.ceil(this.config.days/6):1}static styles=Ei`
            /* Heatmap table */
            table {
                border: none;
                border-spacing: 0px;
                table-layout:fixed;
                width: 100%;
                pointer-events: none;
                user-drag: none;
                user-select: none;
                color: var(--secondary-text-color);
            }
            th {
                position:relative;
                font-weight: normal;
                vertical-align: bottom;
            }
            th:not(.hm-row-title) {
                text-align: center;
                white-space: nowrap;
            }
            /* Used for 12hr displays; we need space for two lines */
            tr.hr12 th:not(.hm-row-title) {
                font-size: 70%;
            }
            tr {
                line-height: 1.1;
                overflow: hidden;
                font-size: 90%;
            }
            .hm-row-title {
                text-align: left;
                max-height: 20px;
                min-width: 50px;
                width: 50px;
            }
            .hm-box {
                background-color: currentcolor;
                pointer-events: auto;
            }
            #selected {
                outline: 6px currentcolor solid;
                z-index: 2;
                margin: 3px;
                position: relative;
                box-shadow: 0px 0px 0px 7px rgba(0,0,0,1), 0px 0px 0px 8px rgba(255,255,255,1);
            }

            /* Legend */
            .legend-container {
                margin-top: 20px;
                width: 80%;
                margin-left: auto;
                margin-right: 5%;
                position: relative;

            }
            .tick-container {
                position: relative:
                left: -10px;
            }
            #legend {
                height: 10px;
                outline-style: solid;
                outline-width: 1px;
                /*
                    Background is set via the style attribute in the object while rendering,
                    as lit-element and CSS templating is a bit of a PITA.
                */
            }

            .legend-tick {
                position: absolute;
                top: 10px;
                height: 10px;
                vertical-align: bottom;
                border-left-style: solid;
                border-left-width: 1px;
                white-space: nowrap;
                text-align: right;
                opacity: 0.7;
            }

            .legend-container .caption {
                position: relative;
                top: -15px;
                transform: translateY(100%) rotate(90deg);
                transform-origin: center left;
                font-size: 80%;
                text-align: left;
            }

            /*
                We use a non-visible shadow copy of the tick captions
                to get a height for the element. As the ticks themselves
                are position: absolute'd, we can't use their height for
                this purpose without some JS kludging.
            */
            span.legend-shadow {
                margin-top: 15px;
                position: relative;
                border-color: red;
                border-style: solid;
                writing-mode: vertical-rl;
                transform-origin: bottom left;
                font-size: 80%;
                line-height: 0.2;
                visibility: hidden;
            }

            /* Detail view */
            #tooltip {
                display: none;
                z-index: 1;
                position: absolute;
                padding: 6px;
                border-radius: 4px;
                background: var(--ha-card-background, var(--card-background-color, white) );
                border-color: currentcolor;
                border-width: 1px;
                border-style: solid;
                white-space: nowrap;
            }
            #tooltip.active {
                display: block;
            }
            #tooltip div.meta {
                font-size: 90%;
            }
            #tooltip div.value {
                font-size: 120%;
            }
        `;static getConfigElement(){return document.createElement("heatmap-card-editor")}};var wt=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),Y=wt.prototype.html,Ai=wt.prototype.css;function Ci(R){var c=[R];return c.raw=!0,Y(c)}var Be=class extends wt{scales=new ye;static get properties(){return{_config:{},active_tab:void 0,entity:void 0,device_class:void 0,scale:void 0}}set hass(c){this.myhass=c}async setConfig(c){this._config=c;var p=await loadCardHelpers();customElements.get("ha-entity-picker")||await(await p.createCardElement({type:"entities",entities:[]})).constructor.getConfigElement(),this.entity=this.myhass.states[this._config.entity],this.device_class=(this.entity&&this.entity.attributes.device_class)??this._config.device_class,this.scale=this.scales.get_scale(this._config.scale),this.active_tab===void 0&&this._config.scale&&(this.active_tab=this.tab_from_scale(this._config.scale))}tab_from_scale(c){return typeof c=="object"?2:this.scales.get_scale(c).type==="relative"?1:0}render_device_class_picker(){let c=Object.keys(ce).map(function(p){return{label:p,value:p}});if(this.entity&&!this.entity.attributes.device_class)return Y`
                <ha-combo-box
                    .label=${"Device class"}
                    .hass=${this.myhass}
                    .configValue=${"device_class"}
                    .items=${c}
                    .value=${this._config.device_class??""}
                    .allowCustomValue=${!1}
                    .helper=${"What device_class best represents this entity?"}
                ></ha-combo-box>
            `}render_scale_docs(c){if(this.scale!==void 0){var p;if(!(this.scale.docs===void 0||this.scale.type!==c))return this.scale.docs?.license&&(p=Y`
                <h4>Scale license</h4>
                <p>
                    This scale is licensed separately from the heatmap card
                    under <a href="${this.scale.docs.license.url}" target="_blank">${this.scale.docs.license.name}</a>.
                </p>
            `),Y`
            <div class="scale-docs">
                <h3>About this scale</h3>
                ${Ci(this.scale.docs?.text)}
                ${p}
            </div>
        `}}render_tab_bar(){return this.device_class?Y`
            <mwc-tab-bar
                @MDCTabBar:activated=${p=>{for(let m of this.renderRoot.querySelectorAll(".scale-picker-content"))m.style.display="none";this.renderRoot.querySelector(`#tab-idx-${p.detail.index}`).style.display="block"}}
                .activeIndex=${this.active_tab??0}
            >
                <mwc-tab label="Absolute"></mwc-tab>
                <mwc-tab label="Relative"></mwc-tab>
                <mwc-tab label="Custom"></mwc-tab>
            </mwc-tab-bar>
            <div class="scale-picker-content" id="tab-idx-0">
                ${this.render_absolute_scale_picker()}
                ${this.render_scale_docs("absolute")}
            </div>
            <div class="scale-picker-content" id="tab-idx-1">
                ${this.render_relative_scale_picker()}
                ${this.render_scale_docs("relative")}
            </div>
            <div class="scale-picker-content" id="tab-idx-2">
                <h3>Custom scale</h3>
                <p>There's no GUI support for setting a custom scale; use the code editor.</p>
                <p>See <a href="https://github.com/kandsten/ha-heatmap-card#custom-color-scales">
                the card README</a> for the config reference.</p>
            </div>
        `:void 0}render_absolute_scale_picker(){var c;let p=this.scales.get_by("device_class",this.device_class);return typeof this._config.scale=="object"?c=Y`Using a custom scale, picker disabled`:p.length===0?c=Y`There are no predefined scales for this device class`:c=Y`
                ${p.map(m=>Y`
                    <ha-formfield .label=${m.name} @change=${this.update_field}>
                        <ha-radio
                            .checked=${m.key===this._config.scale}
                            .value=${m.key}
                            .configValue=${"scale"}
                        ></ha-radio>
                    </ha-formfield><br>
                `)}
            `,Y`
            <div>
                <h3>Scales for this device class</h3>
                ${c}
            </div>
        `}render_relative_scale_picker(){var c,p=this.scales.get_by("type","relative").map(function(v){return{label:v.name,value:v.key,css:v.css}});if(typeof this._config.scale=="object")c=Y`Using a custom scale, picker disabled`;else{var m=v=>Y`
            <ha-list-item>
                <div style="display: inline-block; margin-right: 15px; width: 120px; height: 12px; background: linear-gradient(90deg, ${v.css});"></div> ${v.label}
            </ha-list-item>`;c=Y`
                <ha-combo-box
                    .label=${"Scale"}
                    .hass=${this.myhass}
                    .configValue=${"scale"}
                    .items=${p}
                    .value=${this._config.scale}
                    .renderer=${m}
                    .allowCustomValue=${!0}
                > </ha-combo-box>
            `}if(this.entity&&this.device_class)return Y`
                <h3>Color scales</h3>
                    ${c}
                <h3>Range</h3>
                <div>
                    <ha-textfield
                        .label=${"Minimum value"}
                        .value=${this._config.data?.min??"auto"}
                        .placeholder=0
                        .disabled=${this._config.data?.min==="auto"||this._config.data?.min===void 0}
                        .configValue=${"data.min"}
                        @input=${this.update_field}
                        ></ha-textfield>
                    <ha-formfield .label=${"Infer from the sensor data"} @change=${this.update_field}>
                        <ha-checkbox
                            .label=${"Auto"}
                            .checked=${this._config.data?.min==="auto"||this._config.data?.min===void 0}
                            .value=${"auto"}
                            .configValue=${"data.min"}
                        ></ha-checkbox>
                    </ha-formfield>
                </div>
                <div>
                    <ha-textfield
                        .label=${"Maximum value"}
                        .value=${this._config.data?.max??"auto"}
                        .disabled=${this._config.data?.max==="auto"||this._config.data?.max===void 0}
                        .configValue=${"data.max"}
                        @input=${this.update_field}
                    ></ha-textfield>
                    <ha-formfield .label=${"Infer from the sensor data"} @change=${this.update_field}>
                        <ha-checkbox
                            .label=${"Auto"}
                            .checked=${this._config.data?.max==="auto"||this._config.data?.max===void 0}
                            .value=${"auto"}
                            .configValue=${"data.max"}
                        ></ha-checkbox>
                    </ha-formfield>
                </div>
                `}render_entity_warning(){if(this.entity!==void 0&&(this.entity.attributes?.state_class===void 0||["measurement","total","total_increasing"].includes(this.entity.attributes?.state_class)===!1))return Y`
                    <ha-alert
                        .title=${"Warning"}
                        .type=${"warning"}
                        own-margin
                    >
                        <div>
                            <p>This entity has a <code>state_class</code> attribute set to
                            <i>${this.entity.attributes?.state_class??"undefined"}</i>.</p>
                            <p>This means that data won't be saved to Long Term Statistics, which
                            we use to drive the heatmap; no results will be shown.</p>
                        </div>
                    </ha-alert>
                `}render(){if(!(this.myhass===void 0||this._config===void 0))return Y`
        <div class="root card-config">
            <ha-entity-picker
                .required=${!0}
                .hass=${this.myhass}
                .value=${this._config.entity}
                .configValue=${"entity"}
                .includeDomains=${"sensor"}
            ></ha-entity-picker>
            ${this.render_entity_warning()}
            ${this.render_device_class_picker()}
            <ha-textfield
                .label=${"Days"}
                .placeholder=${21}
                .type=${"number"}
                .value=${this._config.days}
                .configValue=${"days"}
                @input=${this.update_field}
                .helper=${"Days of data to include in the heatmap. Defaults to 21"}
                .helperPersistent=${!0}
            ></ha-textfield>
            ${this.render_tab_bar()}
            <h3>Card elements</h3>
            <ha-textfield
                .label=${"Card title"}
                .placeholder=${this.entity&&this.entity.attributes.friendly_name||""}
                .value=${this._config.title||""}
                .configValue=${"title"}
                @input=${this.update_field}
                ></ha-textfield>
        </div>`}update_field(c){c.stopPropagation();let p=c.target.value;if(this.disabled||p===void 0||p===this.value)return;let m=new Event("value-changed",{bubbles:!0});"checked"in c.target?m.detail={value:c.target.checked===!0?p:0}:isNaN(parseFloat(p))?m.detail={value:p}:m.detail={value:parseFloat(p)},c.target.dispatchEvent(m)}createRenderRoot(){let c=super.createRenderRoot();return c.addEventListener("value-changed",p=>{p.stopPropagation();let m=p.target.configValue,v=p.detail.value;var A=JSON.parse(JSON.stringify(this._config));if(m==="device_class"&&(A.scale=this.scales.defaults_for(v),this.active_tab=this.tab_from_scale(A.scale)),m==="entity"){let I=this.myhass.states[v],d=I&&I.attributes.device_class;d&&(A.scale=this.scales.defaults_for(d),this.active_tab=this.tab_from_scale(A.scale),delete A.device_class)}var F=A,T=m;if(m.indexOf(".")){for(let I of m.split(".").slice(0,-1))F[I]===void 0&&(F[I]={}),F=F[I];T=m.split(".").slice(-1)}F[T]=v;let G=new Event("config-changed");G.detail={config:A},this.dispatchEvent(G)}),c}static styles=Ai`
        .root > * {
            display: block;
        }
        .root > *:not([own-margin]):not(:last-child) {
            margin-bottom: 24px;
        }
        ha-alert[own-margin] {
            margin-bottom: 4px;
        }


        a:link, a:visited {
            color: var(--primary-color);
        }

        .scale-docs {
            margin-left: 2em;
            margin-right: 2em;
            word-wrap: break-word;
        }

        /* Don't mess with the line spacing */
        sup, sub {
            line-height: 0;
        }
    `};customElements.define("heatmap-card",Oe);customElements.define("heatmap-card-editor",Be);window.customCards=window.customCards||[];window.customCards.push({type:"heatmap-card",name:"Heatmap card",preview:!0,description:"Heat maps of entities or energy data"});})();
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */
