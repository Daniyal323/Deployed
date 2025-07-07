'use client';

import { useEffect, useRef } from 'react';

export default function PlexusCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    // Create particles - reduce count on mobile
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 40 : 150;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.4 : 0.8),
        vy: (Math.random() - 0.5) * (isMobile ? 0.4 : 0.8),
        size: Math.random() * (isMobile ? 2 : 3) + (isMobile ? 1 : 1.5),
      });
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let isMouseInCanvas = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseInCanvas = true;
    };

    const handleMouseLeave = () => {
      isMouseInCanvas = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Touch support for mobile
    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseX = touch.clientX - rect.left;
      mouseY = touch.clientY - rect.top;
      isMouseInCanvas = true;
    });
    
    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseX = touch.clientX - rect.left;
      mouseY = touch.clientY - rect.top;
      isMouseInCanvas = true;
    });
    
    canvas.addEventListener('touchend', () => {
      isMouseInCanvas = false;
    });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Mouse interaction - particles are repelled from mouse
        if (isMouseInCanvas) {
          const dx = particle.x - mouseX;
          const dy = particle.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const interactionDistance = isMobile ? 120 : 200;
          if (distance < interactionDistance) {
            const force = (interactionDistance - distance) / interactionDistance;
            const repulsionStrength = isMobile ? 0.08 : 0.15;
            particle.vx += (dx / distance) * force * repulsionStrength;
            particle.vy += (dy / distance) * force * repulsionStrength;
          }
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges with some randomness
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.vx += (Math.random() - 0.5) * 0.5;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.vy += (Math.random() - 0.5) * 0.5;
        }

        // Add minimal natural movement
        const naturalMovement = isMobile ? 0.002 : 0.005;
        particle.vx += (Math.random() - 0.5) * naturalMovement;
        particle.vy += (Math.random() - 0.5) * naturalMovement;

        // Limit velocity
        const maxVel = isMobile ? 2 : 3;
        particle.vx = Math.max(-maxVel, Math.min(maxVel, particle.vx));
        particle.vy = Math.max(-maxVel, Math.min(maxVel, particle.vy));

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Check if particle is near mouse for enhanced effect
        let particleOpacity = isMobile ? 0.6 : 0.8;
        let particleSize = particle.size;
        
        if (isMouseInCanvas) {
          const dx = particle.x - mouseX;
          const dy = particle.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const influenceDistance = isMobile ? 120 : 200;
          if (distance < influenceDistance) {
            const influence = (influenceDistance - distance) / influenceDistance;
            particleOpacity = (isMobile ? 0.6 : 0.8) + (influence * (isMobile ? 0.2 : 0.3));
            particleSize = particle.size + (influence * (isMobile ? 0.8 : 1.5));
          }
        }
        
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particleSize * 2
        );
        gradient.addColorStop(0, `rgba(79, 70, 229, ${particleOpacity})`);
        gradient.addColorStop(0.5, `rgba(79, 70, 229, ${particleOpacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(79, 70, 229, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connections with more dynamic behavior
        particles.forEach((otherParticle, j) => {
          if (i === j) return;

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const connectionDistance = isMobile ? 120 : 180;
          if (distance < connectionDistance) {
            const opacity = (isMobile ? 0.4 : 0.6) * (1 - distance / connectionDistance);
            const lineWidth = (isMobile ? 1 : 2) * (1 - distance / connectionDistance);
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(79, 70, 229, ${opacity})`;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        });
      });

      // Draw mouse cursor indicator - smaller on mobile
      if (isMouseInCanvas) {
        const cursorSize = isMobile ? 4 : 8;
        const innerSize = isMobile ? 2 : 4;
        
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, cursorSize, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(79, 70, 229, 0.6)';
        ctx.lineWidth = isMobile ? 1 : 2;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, innerSize, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(79, 70, 229, 0.8)';
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="plexus-canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        opacity: 0.9,
        cursor: 'crosshair',
      }}
    />
  );
} 