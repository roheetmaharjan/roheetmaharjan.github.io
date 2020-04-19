<footer class="footer">
        <div class="container">
            <div class="my-profile">
                <div class="img-wrapper">
                    <img src="assets/img/profile.png" alt="">
                </div>
                <div class="profile-des">
                    <p>Sudip Shrestha</p>
                    <p>0450 333 333</p>
                    <p>sulabhcreation@gmail.com</p>
                </div>
                <div class="widget-box mt-5">
                        <h5 class="text-white text-center">Follow Us</h5>
                        <ul class="social-menu">
                            <li>
                                <a href="#" target="_blank" class="icon-social icon-facebook" data-toggle="tooltip" title="" data-original-title="Facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" target="_blank" class="icon-social icon-twitter" data-toggle="tooltip" title="" data-original-title="Twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" target="_blank" class="icon-social icon-instagram" data-toggle="tooltip" title="" data-original-title="Instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
            </div>
            <div class="footer-bottom">
                <p>Â© 2019 <a href="#">CYTEK</a>. All rights reserved.</p>
                <ul class="footer-nav">
                    <li><a href="#">Web Development</a></li>
                    <li><a href="#">Web Hosting</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>

            </div>
        </div>
    </footer>
    <div class="modal fade" id="enquire-modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-6">
                            <h4 class="text-white">Need a quote for a project?</h4>
                            <p class="text-white"><small>We will get back to you with in 8 minutes :)</small></p>
                        </div>
                        <div class="col-sm-6">
                        <form name="contactform" method="post" action="send_form_email.php">
                                <div class="group">      
                                    <input type="text" name="first_name" class="form-input" required="">
                                    <span class="bar"></span>
                                    <label class="form-label">Enter your name</label>
                                </div>
                                
                                <div class="group">      
                                    <input type="text" name="email" class="form-input" required="">
                                    <span class="bar"></span>
                                    <label class="form-label">Enter your email</label>
                                </div>
                                <div class="group">      
                                    <input type="text" name="telephone" class="form-input" required="">
                                    <span class="bar"></span>
                                    <label class="form-label">Enter your phone</label>
                                </div>
                                <div class="group">      
                                    <input type="text" name="business_name" class="form-input" required="">
                                    <span class="bar"></span>
                                    <label class="form-label">Enter your business name</label>
                                </div>
                                <div class="group">      
                                    <input type="text" name="comments" class="form-input" required="">
                                    <span class="bar"></span>
                                    <label class="form-label">Comments</label>
                                </div>
                                <div class="d-flex justify-content-end">
                                <br>
                                    <button type="submit" class="btn btn-danger">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>