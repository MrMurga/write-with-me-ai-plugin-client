<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Write_With_Me_AI
 * @subpackage Write_With_Me_AI/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Write_With_Me_AI
 * @subpackage Write_With_Me_AI/public
 * @author     Your Name <email@example.com>
 */
class Write_With_Me_AI_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $write_with_me_ai    The ID of this plugin.
	 */
	private $write_with_me_ai;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $write_with_me_ai       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $write_with_me_ai, $version ) {

		$this->write_with_me_ai = $write_with_me_ai;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Write_With_Me_AI_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Write_With_Me_AI_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->write_with_me_ai, plugin_dir_url( __FILE__ ) . 'css/write-with-me-ai-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Write_With_Me_AI_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Write_With_Me_AI_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->write_with_me_ai, plugin_dir_url( __FILE__ ) . 'js/write-with-me-ai-public.js', array( 'jquery' ), $this->version, false );

	}

}
