<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'rgambar' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'eg%a`8_O|./<7c#25vv0Mqh;2cc6 !rG>[M-l.S$E`4.{D-LnQqrNO`~z)xtw9v+' );
define( 'SECURE_AUTH_KEY',  'JGa`A}nkoo/|Ps6P~Y#g]bj-Ph#G~=wuUTe=YBQ(W4P^Otr-6urB=p^XisTN5@<W' );
define( 'LOGGED_IN_KEY',    '6Wy#JG_oWO1A  :H@#%)oNZs9i&n3zu2%j$a,F7PBtHiQt6h3$#K}cS3:<(Da724' );
define( 'NONCE_KEY',        'iN1Uq+PUW~i+];,,Y+TRVF|t9df@s.`=jH/JzpMj6BV6t98c>-s@3+ksl*wu<[n5' );
define( 'AUTH_SALT',        '^vxar4(y,6*XtMf=f,f<>U/L6vP[m_e5v)oonl6sVubIyX4OSIi_7rg(1e7]aU>`' );
define( 'SECURE_AUTH_SALT', 'IkG*rm?uelSB1r-[.t@57~w|&7K(!p*y:DDhB99X_?HL+9PQpBpB-yoN]cGVTvSo' );
define( 'LOGGED_IN_SALT',   '<rVM9yg5y&HOtPy% !C8` i4AZ.OR_/)c@Ct*jaQb,2]vm`B5F7/eRF4iA=`W4Og' );
define( 'NONCE_SALT',       'w+*i+b~TMRb{W`9-V6U2o3~M-ATx0}URbMp|f=2{oot(<WAJd~7Bk!w%;an_kqIp' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
