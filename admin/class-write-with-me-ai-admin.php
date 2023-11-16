<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Write_With_Me_AI
 * @subpackage Write_With_Me_AI/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Write_With_Me_AI
 * @subpackage Write_With_Me_AI/admin
 * @author     Your Name <email@example.com>
 */
class Write_With_Me_AI_Admin {

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
	 * @var Write_With_Me_AI_Settings
	 */
	private $admin_settings;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $write_with_me_ai       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $write_with_me_ai, $version ) {

		$this->write_with_me_ai = $write_with_me_ai;
		$this->version = $version;
		$this->admin_settings = new Write_With_Me_AI_Settings();
	}

	/**
	 * Register the stylesheets for the admin area.
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

		wp_enqueue_style( $this->write_with_me_ai, plugin_dir_url( __FILE__ ) . 'css/write-with-me-ai-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
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

		wp_enqueue_script( $this->write_with_me_ai, plugin_dir_url( __FILE__ ) . 'js/write-with-me-ai-admin.js', array( 'jquery' ), $this->version, false , true);

	}

	public function custom_metabox_write_with_me_ai_ajax_handler() {
		$option_value = get_option('write_with_me_ai_client_field');
		$message = $_POST['input'];
		
		if ($option_value === false) {
			return wp_send_json_error(['code' => 412, 'error' => 'SDK Key is missing']);
		}
		
		$url = 'https://api.openai.com/v1/chat/completions';
		$args = array(
			'headers' => array(
				'Content-Type'  => 'application/json',
				'Authorization' => 'Bearer ' . $option_value
			),
			'body' => json_encode(array(
				'model' => 'gpt-4',
				'messages' => array(
					array(
						'role' => 'user',
						'content' => "You are a helpful, truthful, and accurate assistant. I would like to generate the following: " . $message
					)
				),
				'temperature' => .65,
				'max_tokens' => 500,
				'top_p' => .9,
				'frequency_penalty' => .1,
				'presence_penalty' => .1
			)),
			'method' => 'POST',
			'data_format' => 'body'
		);

		// Perform the POST request using wp_remote_post()
		$response = wp_remote_post( $url, $args );

		// Check for WordPress errors
		if ( is_wp_error( $response ) ) {
			return wp_send_json_error(['code' => 400, 'error' => $response->get_error_message()]);
		} 

		// Retrieve the response body
		$body = wp_remote_retrieve_body( $response );

		return wp_send_json_success(['code' => 200, 'body' => $body]);
	}

	public function get_admin_settings() {
		return $this->admin_settings;
	}
}
