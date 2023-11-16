<?php

/**
 * This class handles all functionality related to the Metabox in the editor view.
 */
class Write_With_Me_AI_Settings {
	public function admin_menu() {
		// Adds a new settings page under the "Settings" menu in WordPress admin
		add_options_page(
			WriteWithMeAIClientPluginName . ' Settings',     // The text to be displayed in the title tags of the page when the menu is selected
			WriteWithMeAIClientPluginName,              // The text to be used for the menu
			'manage_options',         // The capability required for this menu to be displayed to the user
			WriteWithMeAIClientPrefix . '_settings',     // The slug name to refer to this menu by (unique)
			array($this, WriteWithMeAIClientPrefix . '_settings_page') // The function to be called to output the content for this page
		);
	}

	public function write_with_me_ai_client_settings_page() {
		require_once 'partials/admin-settings/write-with-me-ai-admin-settings.php';
	}

	public function settings_init() {
		// Register a new setting for "my-plugin-settings" page.
		register_setting(WriteWithMeAIClientPrefix . '_settings', WriteWithMeAIClientPrefix . '_field', array($this, WriteWithMeAIClientPrefix . '_sanitize_field'));
		
		// Add a new section to a settings page.
		add_settings_section(
			WriteWithMeAIClientPrefix . '_settings_section',
			WriteWithMeAIClientPluginName . ' Settings',
			array($this, WriteWithMeAIClientPrefix . '_settings_section_cb'),
			WriteWithMeAIClientPrefix . '_settings'
		);
		
		// Add a new field to a section of a settings page.
		add_settings_field(
			WriteWithMeAIClientPrefix . '_field',
			'OpenAI License Key',
			array($this, WriteWithMeAIClientPrefix . '_field_cb'),
			WriteWithMeAIClientPrefix . '_settings',
			WriteWithMeAIClientPrefix . '_settings_section'
		);
	}

	function write_with_me_ai_client_sanitize_field($input) {
		if (is_string($input) && preg_match('/^[a-z0-9-]+$/i', $input)) {
			return sanitize_text_field($input);
		}

		// Set an error message if validation fails.
        add_settings_error(
            'write_with_me_ai_client_field',
            'write_with_me_ai_client_field_error',
            'Input should be an alphanumeric string.',
            'error'
        );

        // Retrieve the current setting value to preserve it in case of an error.
        return get_option('write_with_me_ai_client_field');
	}

	function write_with_me_ai_client_settings_section_cb() {
		require_once 'partials/admin-settings/write-with-me-ai-admin-settings-section-cb.php';
	}
	
	function write_with_me_ai_client_field_cb() {
		require_once 'partials/admin-settings/write-with-me-ai-admin-settings-field-cb.php';
	}
}
