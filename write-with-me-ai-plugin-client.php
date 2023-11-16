<?php

/**
 * @package           Write_With_Me_AI
 *
 * @wordpress-plugin
 * Plugin Name:       Write With Me AI Plugin Client
 * Plugin URI:        https://www.olakaiconsulting.com/write-with-me/
 * Description:       WriteWithMe AI is the perfect plugin for busy content creators who want to get ahead of the curve. Our plugin uses natural language processing to generate variations and summaries of any content in just seconds.
 * Version:           1.0.0
 * Author:            Olakai Consulting LLC
 * Author URI:        https://www.olakaiconsulting.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       write-with-me-ai
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'WRITE_WITH_ME_AI_VERSION', '1.0.0' );

require_once plugin_dir_path( __FILE__ ) . 'includes/constants.php';

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-write-with-me-ai-activator.php
 */
function activate_write_with_me_ai() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-write-with-me-ai-activator.php';
	Write_With_Me_AI_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-write-with-me-ai-deactivator.php
 */
function deactivate_write_with_me_ai() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-write-with-me-ai-deactivator.php';
	Write_With_Me_AI_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_write_with_me_ai' );
register_deactivation_hook( __FILE__, 'deactivate_write_with_me_ai' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-write-with-me-ai.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_write_with_me_ai() {

	$plugin = new Write_With_Me_AI();
	$plugin->run();

}

add_action( 'init', 'run_write_with_me_ai' );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_plugin_block_init() {
	$build_dir = __DIR__ . '/build';

	foreach ( scandir( $build_dir ) as $result ) {
		$block_location = $build_dir . '/' . $result;

		if ( ! is_dir( $block_location ) || '.' === $result || '..' === $result ) {
			continue;
		}

		register_block_type( $block_location );
	}
}
add_action( 'init', 'create_block_plugin_block_init' );

function my_plugin_action_links( $links ) {

	$links = array_merge( array(
		'<a href="' . esc_url( admin_url( '/options-general.php?page=write_with_me_ai_client_settings' ) ) . '">Settings</a>'
	), $links );

	return $links;

}
add_action( 'plugin_action_links_' . plugin_basename( __FILE__ ), 'my_plugin_action_links' );

