/* ==========================================================================
   Luma Living — Contact Page Controller
   Simple student-friendly script for contact form validation and feedback
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const feedbackBox = document.getElementById('contactFeedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    // Basic validation checks
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields before sending your message.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address.');
      return;
    }

    // Display student-friendly demo feedback message
    if (feedbackBox) {
      feedbackBox.style.display = 'block';
      feedbackBox.innerHTML = `
        <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; padding: 16px; border-radius: var(--radius-sm); margin-bottom: 20px;">
          <strong style="display: block; font-size: 1rem; margin-bottom: 4px;">✓ Demo Message Sent!</strong>
          <p style="font-size: 0.9rem; margin: 0; line-height: 1.4;">
            Thank you, <strong>${name}</strong>! Your demo message about "<em>${subject}</em>" has been submitted successfully. (Note: This is a front-end demonstration, so no actual email was transmitted).
          </p>
        </div>
      `;
      // Scroll smoothly to the feedback box
      feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Clear form inputs
    form.reset();
  });
});
