const menuToggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');}));document.getElementById('year').textContent=new Date().getFullYear();


const enquiryForm = document.getElementById("enquiryForm");
enquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(enquiryForm);
  const subject = `Security enquiry - ${data.get("service")}`;
  const body = [
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Service: ${data.get("service")}`,
    "",
    data.get("message")
  ].join("\n");
  window.location.href = `mailto:s.page@nightshieldsecurity.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const params = new URLSearchParams(window.location.search);
const formStatus = document.getElementById("formStatus");
if (formStatus && params.get("sent") === "1") { formStatus.textContent = "Thanks — your enquiry has been sent. We will be in touch."; history.replaceState({}, "", window.location.pathname + "#contact"); }
if (formStatus && params.get("sent") === "0") { formStatus.textContent = "Sorry, we could not send your enquiry. Please email us directly instead."; history.replaceState({}, "", window.location.pathname + "#contact"); }

\n// GitHub Pages-compatible enquiry form.
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("enquiryName").value.trim();
    const email = document.getElementById("enquiryEmail").value.trim();
    const service = document.getElementById("enquiryService").value;
    const message = document.getElementById("enquiryMessage").value.trim();
    const subject = `NightShield Security Website Enquiry - ${service}`;
    const body = `Name: ${name}\nEmail: ${email}\nService required: ${service}\n\nMessage:\n${message}\n\nSent via the NightShield Security website.`;
    window.location.href =
      `mailto:t.newman@nightshieldsecurity.uk?cc=s.page@nightshieldsecurity.uk&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
