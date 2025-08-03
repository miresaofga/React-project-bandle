import { useState } from 'react'
import CarShop from './components/CarShop.jsx'
import './CarShopApp.css'

function CarShopApp() {
  return (
    <div className="car-shop-app">
      <header className="app-header">
        <div className="header-content">
          <h1>🚗 AutoDealer Pro</h1>
          <p>Your Premium Car Shopping Experience</p>
          <div className="header-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Cars Available</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
            <div className="stat">
              <span className="stat-number">5⭐</span>
              <span className="stat-label">Customer Rating</span>
            </div>
          </div>
        </div>
      </header>

      <main className="app-main">
        <CarShop />
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🚗 AutoDealer Pro</h3>
            <p>Premium cars, unbeatable prices, exceptional service.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>🏠 Home</li>
              <li>🚗 Inventory</li>
              <li>💰 Financing</li>
              <li>🔧 Service</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📞 (555) 123-CARS</li>
              <li>📧 sales@autodealer.pro</li>
              <li>📍 123 Auto Street</li>
              <li>🕒 Mon-Sat 9AM-8PM</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <span>📘 Facebook</span>
              <span>📸 Instagram</span>
              <span>🐦 Twitter</span>
              <span>💼 LinkedIn</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 AutoDealer Pro. All rights reserved. | Built with React & Vite</p>
        </div>
      </footer>
    </div>
  )
}

export default CarShopApp
