<<<<<<< HEAD
<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[British Software Development](https://www.britishsoftware.co)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- [UserInsights](https://userinsights.com)
- [Fragrantica](https://www.fragrantica.com)
- [SOFTonSOFA](https://softonsofa.com/)
- [User10](https://user10.com)
- [Soumettre.fr](https://soumettre.fr/)
- [CodeBrisk](https://codebrisk.com)
- [1Forge](https://1forge.com)
- [TECPRESSO](https://tecpresso.co.jp/)
- [Runtime Converter](http://runtimeconverter.com/)
- [WebL'Agence](https://weblagence.com/)
- [Invoice Ninja](https://www.invoiceninja.com)
- [iMi digital](https://www.imi-digital.de/)
- [Earthlink](https://www.earthlink.ro/)
- [Steadfast Collective](https://steadfastcollective.com/)
- [We Are The Robots Inc.](https://watr.mx/)
- [Understand.io](https://www.understand.io/)
- [Abdel Elrafa](https://abdelelrafa.com)
- [Hyper Host](https://hyper.host)
- [Appoly](https://www.appoly.co.uk)
- [OP.GG](https://op.gg)

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
=======
# LAN-Tube
LAN Tube is an Open Source Youtube like web app for your home network.

Please note that this is a React version of the project <a href="https://github.com/FotieMConstant/LAN-Tube">LAN-Tube</a>

![logo](https://user-images.githubusercontent.com/42372656/60809245-1dd79980-a182-11e9-9143-7e11995148be.png)


Technologies

- Bootstrap 4
- PHP 5
- HTML 5
- MySQL

LAN Tube is an Open Source Youtube like web app for your home network. You can upload, watch videos online and download. All this on your local server no need for internet connection.
Please feel free do use the souce code to any purpose and please any contribution to the project will be highly welcomed


	Home page:

![ScreenShot](https://github.com/FotieMConstant/LAN-Tube/blob/master/screenshots/home.JPG)
 
	Upload section:

![ScreenShot](https://github.com/FotieMConstant/LAN-Tube/blob/master/screenshots/upload%20video.JPG)

	LAN Share section:
![ScreenShot](https://github.com/FotieMConstant/LAN-Tube/blob/master/screenshots/share%20files.JPG)


	Search video:
![ScreenShot](https://github.com/FotieMConstant/LAN-Tube/blob/master/screenshots/searchvideo.JPG)

	Quick upload video:
![ScreenShot](https://github.com/FotieMConstant/LAN-Tube/blob/master/screenshots/direct%20upload.JPG)

	Streaming video:
![ScreenShot](https://github.com/FotieMConstant/LAN-Tube/blob/master/screenshots/viewing%20video.JPG)

LAN Tube is easy to install on your local server

How to install
- Extract the file on your local server folder. This is usually the 'www' OR 'htdocs' folder in your drive C:\
- Launch your local server. this can be any whether WAMP or XAMPP. Or any other
- Go to http://localhost/phpmyadmin
- Create database named 'lantube' on your local server.
- Import 'db.sql' from the databse folder.
	This will create a table named 'videos'. this table will collect 'id' of the video uploaded, the 'name' and the location of the file.
- Now all is almost done, just one thing left. We have to increase the maximum POST FILE SIZE and UPLOAD FILE SIZE. generally they are set by default to 8M and 2M for XAMPP respectively.
	
	- Look for the file 'php.ini' and increase the file size to the max you whish to have(E.g 2048MB). this file i generally found in 'C:\xampp\php' directory for XAMPP.
	- Once ther open the file and search for 'post_max_size' and 'upload_max_filesize'. You can now start editing.
	- Restart your server.
- Launch the website and enjoy!





How to connect LAN Tube from another device.

- Connect the server computer on the same network as the other devices.
- On the server machine open comand prompt and type 'ipconfig' to get the ip address of the server computer.
- The ip address is IPv4 Address. . . . . . . . . . . : XXX.XXX.X.XXX.
- Use this ip on the other devices and you are set to go...
  
  ENJOY!!!

	  Any thing you'll love to see in the next update? Mail : fotiemoghommahieconstant@gmail.com

>>>>>>> 95d15007318ed8d27c795204a40dd67e4c2b98e1
