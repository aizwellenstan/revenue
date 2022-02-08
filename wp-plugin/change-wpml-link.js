window.addEventListener('load', function () {
  let location = window.location.href
  if (location.includes("shop/")) {
	  let items = document.getElementsByClassName("wpml-ls-legacy-list-horizontal")
	  for (let i=0; i<items.length; i++) {
		  let item=items[i]
		  item.innerHTML = '<ul><li class="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-zh-hant wpml-ls-current-language wpml-ls-first-item wpml-ls-item-legacy-list-horizontal"><a href="/shop/" class="wpml-ls-link"><img class="wpml-ls-flag" src="https://shop.mng-intl.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/zh.png" alt="繁體中文" width="18" height="12"></a></li><li class="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-en wpml-ls-last-item wpml-ls-item-legacy-list-horizontal"><a href="/shop/?lang=en" class="wpml-ls-link"><img class="wpml-ls-flag" src="https://shop.mng-intl.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png" alt="英語" width="18" height="12"></a></li></ul>'
	  }
  }
})
