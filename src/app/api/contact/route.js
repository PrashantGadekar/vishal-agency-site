// src/app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the contact form submission (in a real app, you'd save to database or send email)
    console.log('Contact Form Submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Timestamp:', new Date().toISOString());

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send auto-reply email

    // Example of how you might send an email (using a service like SendGrid, Nodemailer, etc.)
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      // your email configuration
    });

    await transporter.sendMail({
      from: 'noreply@creativeagency.com',
      to: 'hello@creativeagency.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    */

    // Return success response
    return NextResponse.json({ 
      message: 'Message sent successfully!',
      success: true 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        message: 'Internal server error. Please try again later.',
        success: false 
      },
      { status: 500 }
    );
  }
}
