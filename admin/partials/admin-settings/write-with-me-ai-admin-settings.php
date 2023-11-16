<div class="wrap">
    <h2>My Plugin Settings</h2>
    <form method="post" action="options.php">
        <?php
        // Output nonce, action, and option_page fields for a settings page.
        settings_fields('write_with_me_ai_client_settings');
        
        // Output setting sections and their fields for a settings page.
        do_settings_sections('write_with_me_ai_client_settings');
        
        // Output save settings button
        submit_button();
        ?>
    </form>
</div>
