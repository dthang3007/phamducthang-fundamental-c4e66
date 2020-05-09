const components={

}
components.register=`<section class="register-container">
<form class="register-form" id='register-form'>
    <div class="form-header">
        <h3>DEHEAF</h3>
    </div>
    <div class="form-content">
        <div class="name-wrapper">
            <div class="input-wrapper">
                <input type="text" name="firtname" placeholder="Firtname">
                <div id='firstname-error' class="messgae-error"></div>
            </div>
            <div class="input-wrapper">   
                <input type="text" name="lastname" placeholder="Lastname">
                <div id='lastname-error' class="messgae-error"></div>
            </div>
        </div>
        <div class="input-wrapper">
            <input type="email" name="email" placeholder="Email">
            <div id='email-error' class="messgae-error"></div>
        </div>
        <div class="input-wraper">
            <input type="password" name="password" placeholder="Password">
            <div id='password-error' class="messgae-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" name='confirmPassword' placeholder='ConfirmPassword'>
            <div id='confirm-password-error' class="messgae-error"></div>
        </div>
        <div id="register-error" class="messgae-error"></div>
        <div id="register-success" class="messgae-success"></div>
    </div>
    <div class="form-footer">
        <a href="#" id='register-link' style="color: white;">Already have an account? Login</a>
        <button type="submit" id="register-btn">Register</button>
    </div>
</form>
</section>`
components.login=`<section class="log-in-container">
<form class="login-form" id='login-form'>
    <div class="form-header">
        <h3>DEHEAF</h3>
    </div>
    <div class="form-content">
        <div class="input-wrapper">
            <input type="email" name="email" placeholder="Email">
            <div class=messgae-error id=email-error></div>         
        </div>
        <div class="input-wraper">
            <input type="password" name="password" placeholder="Password">
            <div class=messgae-error id=password-error></div>
        </div>
        <div id="login-error" class="messgae-error"></div>
        <div id="login-success" class="messgae-success"></div>
    </div>
    <div class="form-footer">
        <a href="#" id='login-link'style="color: white;">Not yet have an account? Register</a>
        <button type="submit" id='login-btn'>Login</button>
    </div>
</form>
</section>`