// prelude.ls 0.1.0
// Copyright (c) 2012 George Zahariev
// Released under the MIT License
// raw.github.com/gkz/prelude-ls/master/LICNSE
this.prelude=function(){function Nb(a,b){return a.length?function(){var c=b?b.concat():[];return c.push.apply(c,arguments)<a.length?Nb.call(this,a,c):a.apply(this,c)}:a}function Ob(a,b){return function(){return a(b.apply(this,arguments))}}function Pb(a,b){var c=0,d=b.length>>>0;while(c<d)if(a===b[c++])return!0;return!1}exports={};var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb,Cb,Db,Eb,Fb,Gb,Hb,Ib,Jb,Kb,Lb,Mb=[].slice;return exports.compose=a=function(){var a;return a=Mb.call(arguments),function(){var b,c,d,e,f;b=arguments;for(d=0,f=(e=a).length;d<f;++d)c=e[d],b=[c.apply(this,b)];return b[0]}},exports.max=b=Nb(function(a,b){return Math.max(a,b)}),exports.min=c=Nb(function(a,b){return Math.min(a,b)}),exports.negate=d=function(a){return-a},exports.abs=e=Math.abs,exports.signum=f=function(a){switch(!1){case!(a<0):return-1;case!(a>0):return 1;default:return 0}},exports.quot=g=Nb(function(a,b){return~~(a/b)}),exports.rem=h=Nb(function(a,b){return a%b}),exports.div=i=Nb(function(a,b){return Math.floor(a/b)}),exports.mod=j=Nb(function(a,b){var c;return(a%(c=b)+c)%c}),exports.recip=k=function(a){return 1/a},exports.pi=l=Math.PI,exports.exp=m=Math.exp,exports.sqrt=n=Math.sqrt,exports.log=o=Math.log,exports.pow=p=Nb(function(a,b){return Math.pow(a,b)}),exports.sin=q=Math.sin,exports.tan=r=Math.tan,exports.cos=s=Math.cos,exports.asin=t=Math.asin,exports.atan=u=Math.atan,exports.atan2=v=Nb(function(a,b){return Math.atan2(a,b)}),exports.acos=w=Math.acos,exports.truncate=x=function(a){return~~a},exports.round=y=Math.round,exports.ceiling=z=Math.ceil,exports.floor=A=Math.floor,exports.isItNaN=B=function(a){return a!==a},exports.even=C=function(a){return a%2===0},exports.odd=D=function(a){return a%2!==0},exports.gcd=E=Nb(function(a,b){var c;a=Math.abs(a),b=Math.abs(b);while(b!==0)c=a%b,a=b,b=c;return a}),exports.lcm=F=Nb(function(a,b){return Math.abs(Math.floor(a/E(a,b)*b))}),exports.id=G=function(a){return a},exports.flip=H=Nb(function(a,b,c){return a(c,b)}),exports.error=I=function(a){throw a},exports.each=J=Nb(function(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d)c=b[d],a(c);return b}),exports.map=K=Nb(function(a,b){var c,d,e,f;c=[];for(e=0,f=b.length;e<f;++e)d=b[e],c.push(a(d));return c}),exports.cons=L=Nb(function(a,b){return[a].concat(b)}),exports.append=M=Nb(function(a,b){return a.concat(b)}),exports.filter=N=Nb(function(a,b){var c,d,e,f;c=[];for(e=0,f=b.length;e<f;++e)d=b[e],a(d)&&c.push(d);return c}),exports.reject=O=Nb(function(a,b){var c,d,e,f;c=[];for(e=0,f=b.length;e<f;++e)d=b[e],a(d)||c.push(d);return c}),exports.find=P=Nb(function(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d){c=b[d];if(a(c))return c}}),exports.pluck=Q=Nb(function(a,b){var c,d,e,f;c=[];for(e=0,f=b.length;e<f;++e)d=b[e],d[a]!=null&&c.push(d[a]);return c}),exports.head=R=function(a){if(!a.length)return;return a.slice(0,1)},exports.tail=S=function(a){if(!a.length)return;return a.slice(1)},exports.last=T=function(a){if(!a.length)return;return a.slice(a.length-1)},exports.initial=U=function(a){if(!a.length)return;return a.slice(0,a.length-1)},exports.empty=V=function(a){return!a.length},exports.length=W=function(a){return a.length},exports.reverse=X=function(a){return a.slice().reverse()},exports.fold=Z=exports.foldl=Y=Nb(function(a,b,c){var d,e,f;for(e=0,f=c.length;e<f;++e)d=c[e],b=a(b,d);return b}),exports.fold1=_=exports.foldl1=$=Nb(function(a,b){return Z(a,b[0],b.slice(1))}),exports.foldr=ab=Nb(function(a,b,c){return Z(a,b,c.reverse())}),exports.foldr1=bb=Nb(function(a,b){return b.reverse(),Z(a,b[0],b.slice(1))}),exports.andList=cb=function(a){return Z(function(a,b){return a&&b},!0,a)},exports.orList=db=function(a){return Z(function(a,b){return a||b},!1,a)},exports.any=eb=Nb(function(a,b){return Z(function(b,c){return b||a(c)},!1,b)}),exports.all=fb=Nb(function(a,b){return Z(function(b,c){return b&&a(c)},!0,b)}),exports.sum=gb=function(a){var b,c,d,e;b=0;for(d=0,e=a.length;d<e;++d)c=a[d],b+=c;return b},exports.product=hb=function(a){var b,c,d,e;b=1;for(d=0,e=a.length;d<e;++d)c=a[d],b*=c;return b},exports.mean=jb=exports.average=ib=function(a){var b,c,d,e;b=0;for(d=0,e=a.length;d<e;++d)c=a[d],b+=c;return b/a.length},exports.concat=kb=function(a){return Z(M,[],a)},exports.concatMap=lb=Nb(function(a,b){return kb(K(a,b))}),exports.maximum=mb=function(a){if(!a.length)return;return Math.max.apply(this,a)},exports.minimum=nb=function(a){if(!a.length)return;return Math.min.apply(this,a)},exports.scan=pb=exports.scanl=ob=Nb(function(a,b,c){var d,e,f,g,h;d=[b],e=b;for(g=0,h=c.length;g<h;++g)f=c[g],d.push(e=a(e,f));return d}),exports.scan1=rb=exports.scanl1=qb=Nb(function(a,b){return pb(a,b[0],b.slice(1))}),exports.scanr=sb=Nb(function(a,b,c){return c.reverse(),pb(a,b,c).reverse()}),exports.scanr1=tb=Nb(function(a,b){return b.reverse(),pb(a,b[0],b.slice(1)).reverse()}),exports.replicate=ub=Nb(function(a,b){var c,d;c=[],d=0;for(;d<a;++d)c.push(b);return c}),exports.take=vb=Nb(function(a,b){switch(!1){case!(a<=0):return[];case!!b.length:return[];default:return b.slice(0,a)}}),exports.drop=wb=Nb(function(a,b){switch(!1){case!(a<=0):return b;case!!b.length:return[];default:return b.slice(a)}}),exports.splitAt=xb=Nb(function(a,b){return[vb(a,b),wb(a,b)]}),exports.takeWhile=yb=Nb(function(a,b){var c,d,e,f;if(!b.length)return[];c=0;for(e=0,f=b.length;e<f;++e){d=b[e];if(!a(d))break;++c}return vb(c,b)}),exports.dropWhile=zb=Nb(function(a,b){var c,d,e,f;if(!b.length)return[];c=0;for(e=0,f=b.length;e<f;++e){d=b[e];if(!a(d))break;++c}return wb(c,b)}),exports.span=Ab=Nb(function(a,b){return[yb(a,b),zb(a,b)]}),exports.breakList=Bb=Nb(function(a,b){return Ab(Ob(function(a){return!a},a),b)}),exports.elem=Cb=Nb(function(a,b){return Pb(a,b)}),exports.notElem=Db=Nb(function(a,b){return!Pb(a,b)}),exports.lookup=Eb=Nb(function(a,b){return b!=null?b[a]:void 8}),exports.call=Fb=Nb(function(a,b){return b!=null?typeof b[a]=="function"?b[a]():void 8:void 8}),exports.zip=Gb=function(){var a,b,c,d,e,f,g,h,i;a=Mb.call(arguments),b=[];for(c=0,g=a.length;c<g;++c){d=a[c];for(e=0,h=d.length;e<h;++e)f=d[e],c===0&&b.push([]),(i=b[e])!=null&&i.push(f)}return b},exports.zipWith=Hb=function(a){var b,c,d,e,f,g;b=Mb.call(arguments,1);if(!b[0].length||!b[1].length)return[];c=[];for(e=0,g=(f=Gb.apply(this,b)).length;e<g;++e)d=f[e],c.push(a.apply(this,d));return c},exports.lines=Ib=function(a){return a.length?a.split("\n"):[]},exports.unlines=Jb=function(a){return a.join("\n")},exports.words=Kb=function(a){return a.length?a.split(" "):[]},exports.unwords=Lb=function(a){return a.join(" ")},exports.prelude=function(a){if(typeof a!="undefined"&&a!==null)for(var b in exports)a[b]=exports[b];return exports},exports}()