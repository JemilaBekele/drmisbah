
const ContactForm = require("../models/contact").ContactForm; // Adjust path as needed

const submitContactForm = async (req, res) => {
  const { name, email, company, phone, subject, message } = req.body;

  try {
    // Check if email already exists (optional)
    const existingEntry = await ContactForm.findOne({
      where: { email },
    });

    if (existingEntry) {
      return res.status(400).json({ error: "This email has already submitted a request." });
    }

    // Create new contact form entry
    const newEntry = await ContactForm.create({
      name,
      email,
      company,
      phone,
      subject,
      message,
    });

    return res.status(201).json({
      message: "Contact form submitted successfully",
      data: {
        id: newEntry.id,
        name: newEntry.name,
        email: newEntry.email,
        subject: newEntry.subject,
      },
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return res.status(500).json({ error: "Failed to submit contact form" });
  }
};




// Get all contact form submissions
const getAllContactForms = async (req, res) => {
  try {
    const forms = await ContactForm.findAll();
    return res.status(200).json(forms);
  } catch (error) {
    console.error("Error fetching contact forms:", error);
    return res.status(500).json({ error: "Failed to retrieve contact forms" });
  }
};

// Get a single contact form by ID
const getContactFormById = async (req, res) => {
  const { id } = req.params;

  try {
    const form = await ContactForm.findByPk(id);
    if (!form) {
      return res.status(404).json({ error: "Contact form not found" });
    }
    return res.status(200).json(form);
  } catch (error) {
    console.error("Error fetching contact form:", error);
    return res.status(500).json({ error: "Failed to retrieve contact form" });
  }
};

// Delete a contact form by ID
const deleteContactForm = async (req, res) => {
  const { id } = req.params;

  try {
    const form = await ContactForm.findByPk(id);
    if (!form) {
      return res.status(404).json({ error: "Contact form not found" });
    }

    await form.destroy();
    return res.status(200).json({ message: "Contact form deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact form:", error);
    return res.status(500).json({ error: "Failed to delete contact form" });
  }
};

module.exports = { submitContactForm, getAllContactForms, getContactFormById, deleteContactForm };


