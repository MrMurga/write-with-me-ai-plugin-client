<?php
// Get the value of the setting we've registered with register_setting()
$setting = get_option('write_with_me_ai_client_field');
// Output the field
?>
<input type="text" name="write_with_me_ai_client_field" value="<?php echo isset($setting) ? esc_attr($setting) : ''; ?>">
<?php
