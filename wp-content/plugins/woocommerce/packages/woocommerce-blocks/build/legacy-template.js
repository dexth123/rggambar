(()=>{var e,o={8004:(e,o,t)=>{"use strict";t.r(o);var c={};t.r(c),t.d(c,{blockifyConfig:()=>fe,getDescription:()=>he,isConversionPossible:()=>_e});var r={};t.r(r),t.d(r,{blockifyConfig:()=>Se,getDescription:()=>Ee,isConversionPossible:()=>Be});var l={};t.r(l),t.d(l,{blockifyConfig:()=>Oe,getDescription:()=>Ne,getSkeleton:()=>Pe,isConversionPossible:()=>Te});var a=t(9196);const n=window.wp.blocks,i=window.wc.wcSettings;var s,m,u,d,p,b,k,g,w,_;const h=(0,i.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),f=h.pluginUrl+"images/",y=(h.pluginUrl,h.buildPhase,null===(s=i.STORE_PAGES.shop)||void 0===s||s.permalink,null===(m=i.STORE_PAGES.checkout)||void 0===m||m.id,null===(u=i.STORE_PAGES.checkout)||void 0===u||u.permalink,null===(d=i.STORE_PAGES.privacy)||void 0===d||d.permalink,null===(p=i.STORE_PAGES.privacy)||void 0===p||p.title,null===(b=i.STORE_PAGES.terms)||void 0===b||b.permalink,null===(k=i.STORE_PAGES.terms)||void 0===k||k.title,null===(g=i.STORE_PAGES.cart)||void 0===g||g.id,null===(w=i.STORE_PAGES.cart)||void 0===w||w.permalink,null!==(_=i.STORE_PAGES.myaccount)&&void 0!==_&&_.permalink?i.STORE_PAGES.myaccount.permalink:(0,i.getSetting)("wpLoginUrl","/wp-login.php"),(0,i.getSetting)("localPickupEnabled",!1),(0,i.getSetting)("countries",{})),v=(0,i.getSetting)("countryData",{}),B=(Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowBilling)).map((e=>[e,y[e]||""]))),Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowBilling)).map((e=>[e,v[e].states||[]]))),Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowShipping)).map((e=>[e,y[e]||""]))),Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowShipping)).map((e=>[e,v[e].states||[]]))),Object.fromEntries(Object.keys(v).map((e=>[e,v[e].locale||[]]))),window.wp.blockEditor),E=window.wp.components;var S=t(5736),T=t(1984),C=t(8984);const N=window.wp.data;var P=t(9307);const O=window.wp.notices,I=window.wp.coreData;var x=t(444),A=t(4184),j=t.n(A);const z=(0,a.createElement)((({className:e,height:o,width:t,...c})=>(0,a.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 245 145",className:j()("woo-icon",e),width:t,height:o,...c},(0,a.createElement)("path",{fill:"#7f54b3",d:"M22.76 0h199.1a22.77 22.77 0 0 1 22.8 22.76v75.92a22.77 22.77 0 0 1-22.78 22.78h-71.41l9.77 24-43.13-24H22.76C10.1946 121.449.011 111.2654 0 98.7V22.76C.011 10.1946 10.1946.011 22.76 0z"}),(0,a.createElement)("path",{fill:"#FFF",fillRule:"nonzero",d:"M12.32 20.63a8.16 8.16 0 0 1 6.25-3.09c5.0733-.36 7.9867 2.0333 8.74 7.18 3.14 20.86 6.4933 38.5633 10.06 53.11l21.92-41.69c2-3.76 4.49-5.76 7.52-6 4.3867-.3067 7.13 2.49 8.23 8.39a186 186 0 0 0 9.47 34.23c2.62-25.38 7.0133-43.7133 13.18-55a7.73 7.73 0 0 1 6.6-4.43 8.8 8.8 0 0 1 6.32 2 7.75 7.75 0 0 1 3.05 5.74 8.52 8.52 0 0 1-1 4.77c-3.9 7.24-7.12 19.28-9.66 36.12-2.48 16.2533-3.3967 28.9633-2.75 38.13a12.25 12.25 0 0 1-1.16 6.56 6.32 6.32 0 0 1-5.33 3.53c-2.6667.18-5.3033-1.0567-7.91-3.71-9.2933-9.54-16.6567-23.7267-22.09-42.56C57.3 76.7167 52.48 86.3333 49.3 92.76c-5.86 11.3333-10.89 17.13-15.09 17.39-2.7333.1933-5.0667-2.0933-7-6.86-5.1-13.0933-10.5833-38.4033-16.45-75.93a8.56 8.56 0 0 1 1.56-6.73zM227.23 36.34a23.17 23.17 0 0 0-16-11.59 26.25 26.25 0 0 0-5.42-.58c-9.5867 0-17.41 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6167 14.3333 4.85 19.8a23.15 23.15 0 0 0 16 11.59 26.28 26.28 0 0 0 5.42.59c9.68 0 17.5033-5 23.47-15A53.89 53.89 0 0 0 232.08 56c0-7.7333-1.6167-14.2867-4.85-19.66zm-12.61 27.72c-1.3733 6.56-3.9167 11.5-7.63 14.82-2.9267 2.6667-5.6133 3.7433-8.06 3.23-2.4467-.5133-4.4033-2.6667-5.87-6.46a25.68 25.68 0 0 1-1.76-9.09 35.9 35.9 0 0 1 .73-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.68 25.68 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03zM164.57 36.34a23.2 23.2 0 0 0-16-11.59 26.42 26.42 0 0 0-5.43-.58c-9.5933 0-17.4167 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6133 14.3333 4.84 19.8a23.19 23.19 0 0 0 16 11.59 26.44 26.44 0 0 0 5.43.59c9.68 0 17.5033-5 23.47-15A53.88 53.88 0 0 0 169.4 56c0-7.7333-1.6133-14.2867-4.84-19.66h.01zm-12.61 27.72c-1.3667 6.56-3.91 11.5-7.63 14.82-2.93 2.64-5.63 3.72-8.07 3.23-2.44-.49-4.4-2.64-5.86-6.46a25.7 25.7 0 0 1-1.77-9.09 35.9 35.9 0 0 1 .74-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.91 25.91 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03z"}))),null);t(3617),t(8556);const W="woocommerce/legacy-template",D="single-product",q="product-catalog",R="product-taxonomy",L="product-search-results",M="order-confirmation",G="archive-product",U={"single-product":{type:D,title:(0,S.__)("WooCommerce Single Product Block","woocommerce"),placeholder:"single-product"},"archive-product":{type:q,title:(0,S.__)("WooCommerce Product Grid Block","woocommerce"),placeholder:G},"taxonomy-product_cat":{type:R,title:(0,S.__)("WooCommerce Product Taxonomy Block","woocommerce"),placeholder:G},"taxonomy-product_tag":{type:R,title:(0,S.__)("WooCommerce Product Tag Block","woocommerce"),placeholder:G},"taxonomy-product_attribute":{type:R,title:(0,S.__)("WooCommerce Product Attribute Block","woocommerce"),placeholder:G},"taxonomy-product":{type:R,title:(0,S.__)("WooCommerce Product's Custom Taxonomy Block","woocommerce"),placeholder:G},"product-search-results":{type:L,title:(0,S.__)("WooCommerce Product Search Results Block","woocommerce"),placeholder:G},"checkout-header":{type:"checkout-header",title:(0,S.__)("Checkout Header","woocommerce"),placeholder:"checkout-header"},"order-confirmation":{type:M,title:(0,S.__)("Order Confirmation Block","woocommerce"),placeholder:"fallback"}};function H(e,o){const t=Object.keys(o);let c=null;for(let r=0;t.length>r;r++){const l=o[e.substr(0,t[r].length)];if(l){c=l;break}}return c}function Z(e,o){return!!H(e,o)}const Y=(e,o)=>{var t;const c="core/query-title",r=((null===(t=(0,n.getBlockType)(c))||void 0===t?void 0:t.variations)||[]).find((({name:o})=>o===e));if(!r)return null;const{attributes:l}=r,a={...l,...o,showPrefix:!1};return(0,n.createBlock)(c,a)},V=(e,o)=>{var t;const c="core/group",r=((null===(t=(0,n.getBlockType)(c))||void 0===t?void 0:t.variations)||[]).find((({name:e})=>"group-row"===e));if(!r)return null;const{attributes:l}=r,a={...l,...o,layout:{...l.layout,justifyContent:"space-between"}};return(0,n.createBlock)(c,a,e)};var F=t(229);const $=(0,S.__)("Product Title","woocommerce"),J=((0,a.createElement)(T.Z,{icon:F.Z,className:"wc-block-editor-components-block-icon"}),(0,S.__)("Display the title of a product.","woocommerce"));function Q(e,{blockDescription:o,blockIcon:t,blockTitle:c,variationName:r,scope:l}){(0,n.registerBlockVariation)(e,{description:o,name:r,title:c,isActive:e=>e.__woocommerceNamespace===r,icon:{src:t},attributes:{__woocommerceNamespace:r},scope:l})}const K="woocommerce/product-query/product-title";Q("core/post-title",{blockDescription:J,blockIcon:(0,a.createElement)(E.Icon,{icon:F.Z}),blockTitle:$,variationName:K,scope:["block"]});var X=t(5332);const ee="woocommerce/product-query/product-template";Q("core/post-template",{blockDescription:(0,S.__)("Contains the block elements used to render a product, like its name, featured image, rating, and more.","woocommerce"),blockIcon:(0,a.createElement)(E.Icon,{icon:X.Z}),blockTitle:(0,S.__)("Product template","woocommerce"),variationName:ee,scope:["block","inserter"]});let oe=function(e){return e.SINGLE="single",e.THUMBNAIL="thumbnail",e}({});const te="woocommerce/product-query",ce=(0,i.getSetting)("stockStatusOptions",[]),re={allowedControls:["taxQuery","search","attributes","presets","productSelector","onSale","stockStatus","wooInherit"],displayLayout:{type:"flex",columns:3},query:{perPage:9,pages:0,offset:0,postType:"product",order:"asc",orderBy:"title",author:"",search:"",exclude:[],sticky:"",inherit:!1,__woocommerceAttributes:[],__woocommerceStockStatus:(0,i.getSetting)("hideOutOfStockItems",!1)?Object.keys(function(e,o){const{[o]:t,...c}=e;return c}(ce,"outofstock")):Object.keys(ce)}},le=[["core/post-template",{__woocommerceNamespace:ee,className:"products-block-post-template",...(0,i.getSettingWithCoercion)("postTemplateHasSupportForGridView",!1,(e=>"boolean"==typeof e))&&{layout:{type:"grid",columnCount:3}}},[["woocommerce/product-image",{imageSizing:oe.THUMBNAIL}],["core/post-title",{textAlign:"center",level:3,fontSize:"medium",style:{spacing:{margin:{bottom:"0.75rem",top:"0"}}},isLink:!0,__woocommerceNamespace:K}],["woocommerce/product-price",{textAlign:"center",fontSize:"small"}],["woocommerce/product-button",{textAlign:"center",fontSize:"small"}]]],["core/query-pagination",{layout:{type:"flex",justifyContent:"center"}}],["core/query-no-results"]],ae=e=>(0,n.createBlock)("core/query",{...re,...e,namespace:te,query:{...re.query,inherit:!0}},(0,n.createBlocksFromInnerBlocksTemplate)(le)),ne=(e,o=!1)=>[(0,n.createBlock)("woocommerce/breadcrumbs",e),Y("archive-title",e),o?(0,n.createBlock)("core/term-description",e):null,(0,n.createBlock)("woocommerce/store-notices",e),V([(0,n.createBlock)("woocommerce/product-results-count"),(0,n.createBlock)("woocommerce/catalog-sorting")],e),ae(e)].filter(Boolean),ie=()=>(0,i.isWpVersion)("6.1",">="),se=(e,o)=>o?(e=>(0,S.sprintf)(/* translators: %s is the template title */
(0,S.__)("Transform this template into multiple blocks so you can add, remove, reorder, and customize your %s template.","woocommerce"),e))(e):(e=>(0,S.sprintf)(/* translators: %s is the template title */
(0,S.__)("This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.","woocommerce"),e))(e),me=()=>(0,S.__)("Transform into blocks","woocommerce"),ue={isConversionPossible:ie,getDescription:se,blockifyConfig:{getButtonLabel:me,onClickCallback:({clientId:e,attributes:o,getBlocks:t,replaceBlock:c,selectBlock:r})=>{c(e,ne(o));const l=t().find((e=>"core/group"===e.name&&e.innerBlocks.some((e=>"woocommerce/store-notices"===e.name))));l&&r(l.clientId)},getBlockifiedTemplate:ne}},de={isConversionPossible:ie,getDescription:se,blockifyConfig:{getButtonLabel:me,onClickCallback:({clientId:e,attributes:o,getBlocks:t,replaceBlock:c,selectBlock:r})=>{c(e,ne(o,!0));const l=t().find((e=>"core/group"===e.name&&e.innerBlocks.some((e=>"woocommerce/store-notices"===e.name))));l&&r(l.clientId)},getBlockifiedTemplate:e=>ne(e,!0)}};var pe=t(897);const be=(0,S.__)("Product Summary","woocommerce"),ke=((0,a.createElement)(T.Z,{icon:pe.Z,className:"wc-block-editor-components-block-icon"}),(0,S.__)("Display a short description about a product.","woocommerce")),ge="woocommerce/product-query/product-summary";Q("core/post-excerpt",{blockDescription:ke,blockIcon:(0,a.createElement)(E.Icon,{icon:pe.Z}),blockTitle:be,variationName:ge,scope:["block"]});const we=()=>[(0,n.createBlock)("woocommerce/breadcrumbs"),(0,n.createBlock)("woocommerce/store-notices"),(0,n.createBlock)("core/columns",{align:"wide"},[(0,n.createBlock)("core/column",{type:"constrained",justifyContent:"right",width:"512px"},[(0,n.createBlock)("woocommerce/product-image-gallery")]),(0,n.createBlock)("core/column",{},[(0,n.createBlock)("core/post-title",{__woocommerceNamespace:K,level:1}),(0,n.createBlock)("woocommerce/product-rating"),(0,n.createBlock)("woocommerce/product-price",{fontSize:"large"}),(0,n.createBlock)("core/post-excerpt",{__woocommerceNamespace:ge}),(0,n.createBlock)("woocommerce/add-to-cart-form"),(0,n.createBlock)("woocommerce/product-meta")])]),(0,n.createBlock)("woocommerce/product-details",{align:"wide"}),(0,n.createBlock)("woocommerce/related-products",{align:"wide"})].filter(Boolean),_e=()=>(0,i.isWpVersion)("6.1",">="),he=(e,o)=>o?(e=>(0,S.sprintf)(/* translators: %s is the template title */
(0,S.__)("Transform this template into multiple blocks so you can add, remove, reorder, and customize your %s template.","woocommerce"),e))(e):(e=>(0,S.sprintf)(/* translators: %s is the template title */
(0,S.__)("This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.","woocommerce"),e))(e),fe={getButtonLabel:()=>(0,S.__)("Transform into blocks","woocommerce"),onClickCallback:({clientId:e,getBlocks:o,replaceBlock:t,selectBlock:c})=>{t(e,we());const r=o().find((e=>"core/group"===e.name&&e.innerBlocks.some((e=>"woocommerce/breadcrumbs"===e.name))));r&&c(r.clientId)},getBlockifiedTemplate:we},ye=e=>{const o=((e,o)=>{const t=[(0,n.createBlock)("core/paragraph",{content:(0,S.__)("No products were found matching your selection.","woocommerce")}),(0,n.createBlock)("core/search",{buttonPosition:"button-outside",buttonText:(0,S.__)("Search","woocommerce"),buttonUseIcon:!1,showLabel:!1,placeholder:(0,S.__)("Search products…","woocommerce"),query:{post_type:"product"}})],c="core/query-no-results",r=e.findIndex((e=>e[0]===c)),l={...e[r][1]||{},...o},a=[c,l,t];return[...le.slice(0,r),a,...le.slice(r+1)]})(le,e);return(0,n.createBlock)("core/query",{...re,...e,namespace:te,query:{...re.query,inherit:!0}},(0,n.createBlocksFromInnerBlocksTemplate)(o))},ve=e=>[Y("search-title",e),(0,n.createBlock)("woocommerce/store-notices",e),V([(0,n.createBlock)("woocommerce/product-results-count"),(0,n.createBlock)("woocommerce/catalog-sorting")],e),ye(e)].filter(Boolean),Be=()=>(0,i.isWpVersion)("6.1",">="),Ee=(e,o)=>o?(e=>(0,S.sprintf)(/* translators: %s is the template title */
(0,S.__)("Transform this template into multiple blocks so you can add, remove, reorder, and customize your %s template.","woocommerce"),e))(e):(e=>(0,S.sprintf)(/* translators: %s is the template title */
(0,S.__)("This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.","woocommerce"),e))(e),Se={getButtonLabel:()=>(0,S.__)("Transform into blocks","woocommerce"),onClickCallback:({clientId:e,attributes:o,getBlocks:t,replaceBlock:c,selectBlock:r})=>{c(e,ve(o));const l=t().find((e=>"core/group"===e.name&&e.innerBlocks.some((e=>"woocommerce/store-notices"===e.name))));l&&r(l.clientId)},getBlockifiedTemplate:ve},Te=()=>!0,Ce=e=>[(0,n.createBlock)("woocommerce/order-confirmation-status",{...e,fontSize:"large"}),(0,n.createBlock)("woocommerce/order-confirmation-summary",e),(0,n.createBlock)("woocommerce/order-confirmation-totals-wrapper",e),(0,n.createBlock)("woocommerce/order-confirmation-downloads-wrapper",e),(0,n.createBlock)("core/columns",{...e,className:"woocommerce-order-confirmation-address-wrapper"},[(0,n.createBlock)("core/column",e,[(0,n.createBlock)("woocommerce/order-confirmation-shipping-wrapper",e)]),(0,n.createBlock)("core/column",e,[(0,n.createBlock)("woocommerce/order-confirmation-billing-wrapper",e)])]),(0,n.createBlock)("woocommerce/order-confirmation-additional-information",e)].filter(Boolean),Ne=()=>(0,S.__)("This block represents the classic template used to display the order confirmation. The actual rendered template may appear different from this placeholder.","woocommerce"),Pe=()=>(0,a.createElement)("div",{className:"woocommerce-page"},(0,a.createElement)("div",{className:"woocommerce-order"},(0,a.createElement)("h1",null,(0,S.__)("Order received","woocommerce")),(0,a.createElement)("p",{className:"woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-confirmation"},(0,S.__)("Thank you. Your order has been received.","woocommerce")),(0,a.createElement)("ul",{className:"woocommerce-order-overview woocommerce-thankyou-order-details order_details"},(0,a.createElement)("li",{className:"woocommerce-order-overview__order order"},(0,S.__)("Order number","woocommerce"),": ",(0,a.createElement)("strong",null,"123")),(0,a.createElement)("li",{className:"woocommerce-order-overview__date date"},(0,S.__)("Date","woocommerce"),":"," ",(0,a.createElement)("strong",null,"May 25, 2023")),(0,a.createElement)("li",{className:"woocommerce-order-overview__email email"},(0,S.__)("Email","woocommerce"),":"," ",(0,a.createElement)("strong",null,"shopper@woo.com")),(0,a.createElement)("li",{className:"woocommerce-order-overview__total total"},(0,S.__)("Total","woocommerce"),":"," ",(0,a.createElement)("strong",null,"$20.00"))),(0,a.createElement)("section",{className:"woocommerce-order-details"},(0,a.createElement)("h2",{className:"woocommerce-order-details__title"},(0,S.__)("Order details","woocommerce")),(0,a.createElement)("table",{className:"woocommerce-table woocommerce-table--order-details shop_table order_details"},(0,a.createElement)("thead",null,(0,a.createElement)("tr",null,(0,a.createElement)("th",{className:"woocommerce-table__product-name product-name"},(0,S.__)("Product","woocommerce")),(0,a.createElement)("th",{className:"woocommerce-table__product-table product-total"},(0,S.__)("Total","woocommerce")))),(0,a.createElement)("tbody",null,(0,a.createElement)("tr",{className:"woocommerce-table__line-item order_item"},(0,a.createElement)("td",{className:"woocommerce-table__product-name product-name"},"Sample Product"," ",(0,a.createElement)("strong",{className:"product-quantity"},"× 2")," "),(0,a.createElement)("td",{className:"woocommerce-table__product-total product-total"},"$20.00"))),(0,a.createElement)("tfoot",null,(0,a.createElement)("tr",null,(0,a.createElement)("th",{scope:"row"},(0,S.__)("Subtotal","woocommerce"),":"),(0,a.createElement)("td",null,"$20.00")),(0,a.createElement)("tr",null,(0,a.createElement)("th",{scope:"row"},(0,S.__)("Total","woocommerce"),":"),(0,a.createElement)("td",null,"$20.00"))))),(0,a.createElement)("section",{className:"woocommerce-customer-details"},(0,a.createElement)("section",{className:"woocommerce-columns woocommerce-columns--2 woocommerce-columns--addresses col2-set addresses"},(0,a.createElement)("div",{className:"woocommerce-column woocommerce-column--1 woocommerce-column--billing-address col-1"},(0,a.createElement)("h2",{className:"woocommerce-column__title"},(0,S.__)("Billing address","woocommerce")),(0,a.createElement)("address",null,"123 Main St",(0,a.createElement)("br",null),"New York, NY 10001",(0,a.createElement)("br",null),"United States (US)")),(0,a.createElement)("div",{className:"woocommerce-column woocommerce-column--2 woocommerce-column--shipping-address col-2"},(0,a.createElement)("h2",{className:"woocommerce-column__title"},(0,S.__)("Shipping address","woocommerce")),(0,a.createElement)("address",null,"123 Main St",(0,a.createElement)("br",null),"New York, NY 10001",(0,a.createElement)("br",null),"United States (US)")))))),Oe={getButtonLabel:()=>(0,S.__)("Transform into blocks","woocommerce"),onClickCallback:({clientId:e,attributes:o,getBlocks:t,replaceBlock:c,selectBlock:r})=>{c(e,Ce(o));const l=t().find((e=>"core/group"===e.name&&e.innerBlocks.some((e=>"woocommerce/store-notices"===e.name))));l&&r(l.clientId)},getBlockifiedTemplate:Ce},Ie={[q]:ue,[R]:de,[D]:c,[L]:r,[M]:l,fallback:{isConversionPossible:()=>!1,getBlockifiedTemplate:()=>[],getDescription:()=>"",onClickCallback:()=>{}}},xe=({blockifyConfig:e,clientId:o,attributes:t})=>{const{getButtonLabel:c,onClickCallback:r,getBlockifiedTemplate:l}=e,[i,s]=(0,P.useState)(!1),{replaceBlock:m,selectBlock:u,replaceBlocks:d}=(0,N.useDispatch)(B.store),{getBlocks:p}=(0,N.useSelect)((e=>({getBlocks:e(B.store).getBlocks})),[]),{createInfoNotice:b}=(0,N.useDispatch)(O.store);return(0,a.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-migration-button-container"},(0,a.createElement)(E.Button,{isPrimary:!0,onClick:()=>{r({clientId:o,getBlocks:p,attributes:t,replaceBlock:m,selectBlock:u}),b((0,S.__)("Template transformed into blocks!","woocommerce"),{actions:[{label:(0,S.__)("Undo","woocommerce"),onClick:()=>{const e=p().reduce(((e,o)=>"core/template-part"===o.name?e:[...e,o.clientId]),[]);d(e,(0,n.createBlock)("core/group",{layout:{inherit:!0,type:"constrained"}},[(0,n.createBlock)("woocommerce/legacy-template",{template:t.template})]))}}],type:"snackbar"})},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),text:c?c():""},i&&(0,a.createElement)(E.Popover,{resize:!1,placement:"right-end"},(0,a.createElement)("div",{style:{minWidth:"250px",width:"250px",maxWidth:"250px",minHeight:"300px",height:"300px",maxHeight:"300px",cursor:"pointer"}},(0,a.createElement)(B.BlockPreview,{blocks:l({...t,isPreview:!0}),viewportWidth:1200,additionalStyles:[{css:"body { padding: 20px !important; height: fit-content !important; overflow:hidden}"}]})))))},Ae=({clientId:e,attributes:o,setAttributes:t})=>{var c,r,l,n,i;const s=(0,B.useBlockProps)(),{editedPostId:m}=(0,N.useSelect)((e=>({editedPostId:e("core/edit-site").getEditedPostId()})),[]),u=(0,I.useEntityRecord)("postType","wp_template",m),d=H(o.template,U),p=null!==(c=null===(r=u.record)||void 0===r||null===(l=r.title.rendered)||void 0===l?void 0:l.toLowerCase())&&void 0!==c?c:o.template,b=null!==(n=null==d?void 0:d.placeholder)&&void 0!==n?n:"fallback",k=null!==(i=null==d?void 0:d.type)&&void 0!==i?i:"fallback";(0,P.useEffect)((()=>{var e;return t({template:o.template,align:null!==(e=o.align)&&void 0!==e?e:"wide"})}),[o.align,o.template,t]);const{isConversionPossible:g,getDescription:w,getSkeleton:_,blockifyConfig:h}=Ie[k],y=_?_():(0,a.createElement)("img",{className:"wp-block-woocommerce-classic-template__placeholder-image",src:`${f}template-placeholders/${b}.svg`,alt:p}),v=g(),C=w(p,v);return(0,a.createElement)("div",{...s},(0,a.createElement)(E.Placeholder,{className:"wp-block-woocommerce-classic-template__placeholder"},(0,a.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-wireframe"},y),(0,a.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-copy"},(0,a.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-copy__icon-container"},(0,a.createElement)("span",{className:"woo-icon"},(0,a.createElement)(T.Z,{icon:z})," ",(0,S.__)("WooCommerce","woocommerce")),(0,a.createElement)("span",null,(0,S.__)("Classic Template Placeholder","woocommerce"))),(0,a.createElement)("p",{dangerouslySetInnerHTML:{__html:C}}),(0,a.createElement)("p",null,(0,S.__)("You cannot edit the content of this block. However, you can move it and place other blocks around it.","woocommerce")),v&&h&&(0,a.createElement)(xe,{clientId:e,blockifyConfig:h,attributes:o}))))},je=((e,o,t)=>{let c,r=null;const l=(...o)=>{r=o,c&&clearTimeout(c),c=setTimeout((()=>{c=null,r&&e(...r)}),100)};return l.flush=()=>{c&&r&&(e(...r),clearTimeout(c),c=null)},l})((()=>{const e=(0,N.select)("core/block-editor").getBlocks().flatMap((e=>[e,...e.innerBlocks])).find((e=>"core/missing"===e.name&&e.attributes.originalName===W));if(e){const o=(0,n.parse)(e.attributes.originalContent);o&&(0,N.dispatch)("core/block-editor").replaceBlock(e.clientId,o)}}));let ze;(0,N.subscribe)((()=>{var e;const o=ze,t=(0,N.select)("core/edit-site"),c=null==t?void 0:t.getEditedPostId();ze="number"==typeof c?void 0:c;const r=null===(e=ze)||void 0===e?void 0:e.split("//")[1];if(null==r)return;const l=(0,n.getBlockType)(W),i=Boolean(l);return i&&Z(r,U)&&je(),o!==ze?!i||Z(r,U)&&!function(e,o){const t=H(o,U);return(null==e?void 0:e.title)!==(null==t?void 0:t.title)}(l,r)?void(!i&&Z(r,U)&&(({template:e,inserter:o})=>{(0,n.registerBlockType)(W,{title:e&&U[e]?U[e].title:(0,S.__)("WooCommerce Classic Template","woocommerce"),icon:(0,a.createElement)(T.Z,{icon:C.Z,className:"wc-block-editor-components-block-icon"}),category:"woocommerce",apiVersion:2,keywords:[(0,S.__)("WooCommerce","woocommerce")],description:(0,S.__)("Renders classic WooCommerce PHP templates.","woocommerce"),supports:{align:["wide","full"],html:!1,multiple:!1,reusable:!1,inserter:o},attributes:{template:{type:"string",default:"any"},align:{type:"string",default:"wide"}},edit:({attributes:o,clientId:t,setAttributes:c})=>{const r=null!=e?e:o.template;return(0,a.createElement)(Ae,{attributes:{...o,template:r},setAttributes:c,clientId:t})},save:()=>null})})({template:r,inserter:!0})):((0,n.unregisterBlockType)(W),void(ze=void 0)):void 0}),"core/blocks-editor")},3617:()=>{},8556:()=>{},9196:e=>{"use strict";e.exports=window.React},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},444:e=>{"use strict";e.exports=window.wp.primitives}},t={};function c(e){var r=t[e];if(void 0!==r)return r.exports;var l=t[e]={exports:{}};return o[e].call(l.exports,l,l.exports,c),l.exports}c.m=o,e=[],c.O=(o,t,r,l)=>{if(!t){var a=1/0;for(m=0;m<e.length;m++){for(var[t,r,l]=e[m],n=!0,i=0;i<t.length;i++)(!1&l||a>=l)&&Object.keys(c.O).every((e=>c.O[e](t[i])))?t.splice(i--,1):(n=!1,l<a&&(a=l));if(n){e.splice(m--,1);var s=r();void 0!==s&&(o=s)}}return o}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[t,r,l]},c.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return c.d(o,{a:o}),o},c.d=(e,o)=>{for(var t in o)c.o(o,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},c.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.j=4798,(()=>{var e={4798:0};c.O.j=o=>0===e[o];var o=(o,t)=>{var r,l,[a,n,i]=t,s=0;if(a.some((o=>0!==e[o]))){for(r in n)c.o(n,r)&&(c.m[r]=n[r]);if(i)var m=i(c)}for(o&&o(t);s<a.length;s++)l=a[s],c.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return c.O(m)},t=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var r=c.O(void 0,[2869],(()=>c(8004)));r=c.O(r),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["legacy-template"]=r})();