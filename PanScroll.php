<?php

if (!defined('MEDIAWIKI')) {
	die('Not an entry point.');
}

$wgExtensionsCredits['parserhook'][] = array(
	'path' => __FILE__,
	'name' => 'PanScroll',
	'version' => 0.1,
	'author' => 'Mathias Lidal',
	'url' => 'https://www.mediawiki.org/wiki/Extension:PanScroll',
	'descriptionmsg' => 'panscroll-desc'
);

$wgHooks['ParserFirstCallInit'][] = 'PanScrollHooks::init';

$wgAutoloadClasses['PanScrollHooks'] = dirname(__FILE__) . '/PanScroll.hooks.php';

#$wgExtensionMessagesFiles['PanScroll'] = dirname(__FILE__) . '/PanScroll.i18n.php';

$wgResourceModules['ext.panscroll.core'] = array(
	'scripts' => array(
		'js/panscroll.js'
	),
	'styles' => array(
		'css/panscroll.css'
	),
	'messages' => array(
		'panscroll-js-init-error'
	),
	'group' => 'ext.panscroll',
	'localBasePath' => dirname(__FILE__),
	'remoteExtPath' => 'PanScroll'
);

?>