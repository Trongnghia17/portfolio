(function() {
    // Initialize EmailJS with your user ID (you'll get this from EmailJS dashboard)
    emailjs.init("iqtsyh496VvKOAOkF"); // Replace with your actual user ID
    
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = "Đang gửi...";
        submitBtn.disabled = true;
        
        // Prepare template parameters
        const templateParams = {
            from_name: contactForm.name.value,
            email_sender: contactForm.email.value,
            subject: contactForm.subject.value,
            message: contactForm.message.value,
            to_email: "trannghia270403@gmail.com"
        };
        
        // Send email using EmailJS
        emailjs.send('service_2704', 'template_aibari6', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Tin nhắn đã được gửi thành công!");
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert("Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.");
            })
            .finally(() => {
                // Restore button state
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
    });
})();