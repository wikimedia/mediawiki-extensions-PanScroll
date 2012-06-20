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

$dir = dirname( __FILE__ );

$wgAutoloadClasses['PanScrollHooks'] = $dir . '/PanScroll.hooks.php';

$wgExtensionMessagesFiles['PanScroll'] = $dir . '/PanScroll.i18n.php';

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
	'localBasePath' => $dir,
	'remoteExtPath' => 'PanScroll'
);