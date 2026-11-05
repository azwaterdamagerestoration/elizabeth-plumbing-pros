const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'public', 'images', 'blog');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Featured Image: Hidden Plumbing Leak Detection (1280x720, 16:9)
const featuredSvg = `
<svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#080F1F"/>
      <stop offset="60%" stop-color="#102B4E"/>
      <stop offset="100%" stop-color="#1677C8"/>
    </linearGradient>
    <linearGradient id="pipeGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#E28743"/>
      <stop offset="50%" stop-color="#D16B27"/>
      <stop offset="100%" stop-color="#964B00"/>
    </linearGradient>
    <linearGradient id="waterGlow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#23B8D4" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#1677C8" stop-opacity="0.2"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="1280" height="720" fill="url(#bgGrad)"/>
  
  <rect x="80" y="70" width="1120" height="580" rx="28" fill="#0D1E36" stroke="#1E3E68" stroke-width="2"/>
  
  <rect x="150" y="100" width="40" height="520" rx="6" fill="#1B3252"/>
  <rect x="520" y="100" width="40" height="520" rx="6" fill="#1B3252"/>
  <rect x="860" y="100" width="40" height="520" rx="6" fill="#1B3252"/>

  <path d="M260,620 L260,250 Q260,220 290,220 L720,220 Q750,220 750,250 L750,620" fill="none" stroke="url(#pipeGrad)" stroke-width="24" stroke-linecap="round"/>
  <path d="M310,620 L310,280 Q310,260 330,260 L680,260 Q700,260 700,280 L700,620" fill="none" stroke="#38BDF8" stroke-width="16" stroke-linecap="round" stroke-opacity="0.7"/>

  <ellipse cx="480" cy="220" rx="130" ry="85" fill="url(#waterGlow)" filter="url(#glow)"/>
  <circle cx="480" cy="220" r="10" fill="#FFFFFF" filter="url(#glow)"/>

  <circle cx="480" cy="270" r="8" fill="#23B8D4"/>
  <circle cx="482" cy="330" r="10" fill="#23B8D4" opacity="0.9"/>
  <circle cx="478" cy="400" r="9" fill="#23B8D4" opacity="0.8"/>
  <circle cx="481" cy="470" r="11" fill="#23B8D4" opacity="0.7"/>
  <circle cx="480" cy="540" r="12" fill="#23B8D4" opacity="0.6"/>
  
  <ellipse cx="480" cy="615" rx="140" ry="16" fill="#23B8D4" fill-opacity="0.6" filter="url(#glow)"/>

  <g transform="translate(620, 160)">
    <rect x="0" y="0" width="420" height="210" rx="20" fill="#080F1F" fill-opacity="0.95" stroke="#23B8D4" stroke-width="2"/>
    <text x="30" y="42" fill="#23B8D4" font-family="system-ui, sans-serif" font-size="14" font-weight="800" letter-spacing="2">NON-INVASIVE DIAGNOSTIC SCAN</text>
    <line x1="30" y1="58" x2="390" y2="58" stroke="#1E3E68" stroke-width="1.5"/>

    <path d="M30,105 Q60,105 75,80 T115,130 T155,65 T185,145 T215,75 T245,125 T285,95 T390,105" fill="none" stroke="#23B8D4" stroke-width="3" stroke-linecap="round"/>
    
    <text x="30" y="155" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="17" font-weight="700">Acoustic Seepage Frequency: 4.8 kHz</text>
    <text x="30" y="185" fill="#FF8533" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Status: Active Concealed Pipe Breach</text>
  </g>

  <g transform="translate(130, 120)">
    <rect x="0" y="0" width="290" height="40" rx="20" fill="#1677C8" fill-opacity="0.3" stroke="#23B8D4" stroke-width="1.5"/>
    <text x="22" y="25" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="13" font-weight="800" letter-spacing="1.5">HOMEOWNER DIAGNOSTIC GUIDE</text>
  </g>

  <rect x="80" y="595" width="1120" height="55" rx="16" fill="#050B16" fill-opacity="0.9"/>
  <text x="120" y="630" fill="#CBD5E1" font-family="system-ui, sans-serif" font-size="15" font-weight="600">
    Fig. 1: Ultrasonic &amp; thermal cross-section depicting pressurized pipe seepage behind residential drywall.
  </text>
</svg>`;

// 2. Supporting Image: Water Meter Leak Detection Test (1200x675)
const waterMeterSvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="meterBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#080F1F"/>
      <stop offset="100%" stop-color="#102B4E"/>
    </linearGradient>
    <radialGradient id="dialGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="85%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#CBD5E1"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#meterBg)"/>

  <!-- Left: Water Meter Dial -->
  <g transform="translate(100, 75)">
    <!-- Dial Outer Ring -->
    <circle cx="260" cy="260" r="240" fill="#1E293B" stroke="#334155" stroke-width="12"/>
    <circle cx="260" cy="260" r="225" fill="#0F172A"/>
    <circle cx="260" cy="260" r="200" fill="url(#dialGrad)"/>

    <!-- Dial Tick Marks -->
    <g stroke="#0F172A" stroke-width="3">
      <line x1="260" y1="75" x2="260" y2="95"/>
      <line x1="445" y1="260" x2="425" y2="260"/>
      <line x1="260" y1="445" x2="260" y2="425"/>
      <line x1="75" y1="260" x2="95" y2="260"/>
      <line x1="390" y1="130" x2="375" y2="145"/>
      <line x1="390" y1="390" x2="375" y2="375"/>
      <line x1="130" y1="390" x2="145" y2="375"/>
      <line x1="130" y1="130" x2="145" y2="145"/>
    </g>

    <!-- Digits Odometer Box -->
    <rect x="180" y="160" width="160" height="48" rx="8" fill="#0F172A" stroke="#475569" stroke-width="2"/>
    <text x="260" y="194" fill="#FFFFFF" font-family="monospace" font-size="28" font-weight="900" text-anchor="middle" letter-spacing="4">04821.6</text>
    <text x="260" y="222" fill="#64748B" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">CUBIC FEET / GALLONS</text>

    <!-- Low Flow Indicator Star / Triangle (The Leak Detector) -->
    <g transform="translate(260, 310)">
      <polygon points="0,-24 7,-8 24,-7 12,6 15,23 0,14 -15,23 -12,6 -24,-7 -7,-8" fill="#FF8533"/>
      <circle cx="0" cy="0" r="4" fill="#FFFFFF"/>
    </g>
    <text x="260" y="355" fill="#0F172A" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle">LOW-FLOW LEAK INDICATOR</text>
    <text x="260" y="372" fill="#EF4444" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">(Rotates during microscopic leaks)</text>

    <!-- Main Sweeping Hand -->
    <line x1="260" y1="260" x2="380" y2="190" stroke="#DC2626" stroke-width="5" stroke-linecap="round"/>
    <circle cx="260" cy="260" r="12" fill="#DC2626"/>
    <circle cx="260" cy="260" r="4" fill="#FFFFFF"/>
  </g>

  <!-- Right: Step-by-Step Procedure Guide -->
  <g transform="translate(660, 95)">
    <rect x="0" y="0" width="460" height="485" rx="20" fill="#0D1E36" stroke="#1E3E68" stroke-width="2"/>
    
    <text x="35" y="45" fill="#23B8D4" font-family="system-ui, sans-serif" font-size="14" font-weight="800" letter-spacing="1.5">2-HOUR WATER METER TEST PROTOCOL</text>
    <line x1="35" y1="62" x2="425" y2="62" stroke="#1E3E68" stroke-width="1.5"/>

    <g transform="translate(35, 90)">
      <circle cx="16" cy="16" r="16" fill="#1677C8"/>
      <text x="16" y="22" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle">1</text>
      <text x="46" y="16" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="700">Shut Off All Fixtures</text>
      <text x="46" y="36" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="13">Cease washing machines, dishwashers, ice makers &amp; sprinklers.</text>
    </g>

    <g transform="translate(35, 175)">
      <circle cx="16" cy="16" r="16" fill="#1677C8"/>
      <text x="16" y="22" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle">2</text>
      <text x="46" y="16" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="700">Observe Leak Indicator Dial</text>
      <text x="46" y="36" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="13">If star/triangle spins while taps are off, water is actively escaping.</text>
    </g>

    <g transform="translate(35, 260)">
      <circle cx="16" cy="16" r="16" fill="#1677C8"/>
      <text x="16" y="22" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle">3</text>
      <text x="46" y="16" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="700">Record Initial Number</text>
      <text x="46" y="36" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="13">Write down exact digits. Wait 2 hours without using any water.</text>
    </g>

    <g transform="translate(35, 345)">
      <circle cx="16" cy="16" r="16" fill="#FF8533"/>
      <text x="16" y="22" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle">4</text>
      <text x="46" y="16" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="700">Check for Any Dial Movement</text>
      <text x="46" y="36" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="13">Any register increase indicates a hidden plumbing or slab leak.</text>
    </g>

    <rect x="35" y="415" width="390" height="42" rx="10" fill="#FF8533" fill-opacity="0.15" stroke="#FF8533" stroke-width="1"/>
    <text x="230" y="441" fill="#FF8533" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Action: Disconnect irrigation to isolate indoor vs outdoor leaks.</text>
  </g>

  <!-- Caption -->
  <rect x="100" y="605" width="1020" height="44" rx="12" fill="#050B16" fill-opacity="0.9"/>
  <text x="130" y="632" fill="#CBD5E1" font-family="system-ui, sans-serif" font-size="14" font-weight="500">
    Fig. 2: Residential water meter testing protocol and low-flow leak detection star mechanism.
  </text>
</svg>`;

// 3. Supporting Image: Drywall Moisture & Baseboard Wall Damage (1200x675)
const moistureWallSvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="wallBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#080F1F"/>
      <stop offset="100%" stop-color="#102B4E"/>
    </linearGradient>
    <linearGradient id="drywallGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#E2E8F0"/>
      <stop offset="100%" stop-color="#CBD5E1"/>
    </linearGradient>
    <radialGradient id="waterStain" cx="45%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#78350F" stop-opacity="0.8"/>
      <stop offset="45%" stop-color="#92400E" stop-opacity="0.5"/>
      <stop offset="75%" stop-color="#D97706" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#E2E8F0" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#wallBg)"/>

  <!-- Left: Wall Cross-Section Graphic -->
  <g transform="translate(80, 80)">
    <!-- Base Room Wall -->
    <rect x="0" y="0" width="500" height="470" rx="16" fill="url(#drywallGrad)" stroke="#94A3B8" stroke-width="2"/>

    <!-- Subtle Crown & Flooring Baseboard -->
    <rect x="0" y="420" width="500" height="50" fill="#475569"/>
    <rect x="0" y="450" width="500" height="20" fill="#334155"/>

    <!-- Warped / Buckled Baseboard Section -->
    <path d="M160,420 Q240,405 320,420 L320,470 L160,470 Z" fill="#92400E" opacity="0.85"/>

    <!-- Water Stain Halo on Drywall -->
    <ellipse cx="240" cy="260" rx="160" ry="120" fill="url(#waterStain)"/>

    <!-- Peeling Paint / Efflorescence Cracking -->
    <path d="M210,230 Q225,215 240,240 T270,230" fill="none" stroke="#78350F" stroke-width="2" stroke-linecap="round"/>
    <path d="M190,270 Q215,290 250,275 T290,285" fill="none" stroke="#78350F" stroke-width="2" stroke-linecap="round"/>

    <!-- Concealed Pipe Behind Cutaway (Ghosted outline) -->
    <line x1="240" y1="40" x2="240" y2="420" stroke="#FF8533" stroke-width="12" stroke-dasharray="8 6" opacity="0.8"/>
    <circle cx="240" cy="240" r="14" fill="#EF4444" opacity="0.85"/>
    <text x="270" y="245" fill="#991B1B" font-family="system-ui, sans-serif" font-size="13" font-weight="800">LEAK ORIGIN POINT</text>
  </g>

  <!-- Right: Pinless vs Pin Moisture Scale Guide -->
  <g transform="translate(630, 80)">
    <rect x="0" y="0" width="490" height="470" rx="20" fill="#0D1E36" stroke="#1E3E68" stroke-width="2"/>

    <text x="35" y="42" fill="#23B8D4" font-family="system-ui, sans-serif" font-size="14" font-weight="800" letter-spacing="1.5">DRYWALL MOISTURE SEVERITY SCALE</text>
    <line x1="35" y1="58" x2="455" y2="58" stroke="#1E3E68" stroke-width="1.5"/>

    <!-- Normal Range -->
    <g transform="translate(35, 85)">
      <rect x="0" y="0" width="420" height="85" rx="12" fill="#0F2B48" stroke="#10B981" stroke-width="2"/>
      <circle cx="28" cy="28" r="12" fill="#10B981"/>
      <text x="54" y="33" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="700">Dry &amp; Normal: 5% – 12% Moisture</text>
      <text x="54" y="58" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="13">Normal atmospheric baseline. No structural or mold risk.</text>
    </g>

    <!-- Elevated Range -->
    <g transform="translate(35, 195)">
      <rect x="0" y="0" width="420" height="85" rx="12" fill="#0F2B48" stroke="#F59E0B" stroke-width="2"/>
      <circle cx="28" cy="28" r="12" fill="#F59E0B"/>
      <text x="54" y="33" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="700">Elevated Caution: 13% – 17% Moisture</text>
      <text x="54" y="58" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="13">Early seepage indicator. Insulation dampening behind sheetrock.</text>
    </g>

    <!-- Saturated Range -->
    <g transform="translate(35, 305)">
      <rect x="0" y="0" width="420" height="85" rx="12" fill="#0F2B48" stroke="#EF4444" stroke-width="2"/>
      <circle cx="28" cy="28" r="12" fill="#EF4444"/>
      <text x="54" y="33" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="700">Active Saturation: &gt;18% Moisture</text>
      <text x="54" y="58" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="13">Active pressurized pipe leak or drain overflow. Mold germination within 24-48 hrs.</text>
    </g>

    <g transform="translate(35, 410)">
      <text x="0" y="24" fill="#38BDF8" font-family="system-ui, sans-serif" font-size="13" font-weight="600">
        💡 Note: Stains often manifest feet away from the pipe fissure along horizontal studs.
      </text>
    </g>
  </g>

  <!-- Caption -->
  <rect x="80" y="585" width="1040" height="45" rx="12" fill="#050B16" fill-opacity="0.9"/>
  <text x="110" y="613" fill="#CBD5E1" font-family="system-ui, sans-serif" font-size="14" font-weight="500">
    Fig. 3: Drywall discoloration patterns, baseboard distortion, and moisture meter severity thresholds.
  </text>
</svg>`;

// 4. Supporting Image: Pipe Corrosion & Pinhole Leak (1200x675)
const pipeCorrosionSvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pipeBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#080F1F"/>
      <stop offset="100%" stop-color="#102B4E"/>
    </linearGradient>
    <linearGradient id="copperHealthy" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#E07A5F"/>
      <stop offset="50%" stop-color="#CC6633"/>
      <stop offset="100%" stop-color="#994411"/>
    </linearGradient>
    <linearGradient id="copperCorroded" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3D7B80"/>
      <stop offset="35%" stop-color="#2D5A5E"/>
      <stop offset="70%" stop-color="#CC6633"/>
      <stop offset="100%" stop-color="#1E3F42"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#pipeBg)"/>

  <!-- Left: Healthy Copper Pipe Section -->
  <g transform="translate(100, 100)">
    <rect x="0" y="0" width="460" height="420" rx="20" fill="#0D1E36" stroke="#1E3E68" stroke-width="2"/>
    <text x="35" y="45" fill="#23B8D4" font-family="system-ui, sans-serif" font-size="14" font-weight="800" letter-spacing="1.5">STAGE A: HEALTHY SUPPLY LINE</text>
    <line x1="35" y1="62" x2="425" y2="62" stroke="#1E3E68" stroke-width="1.5"/>

    <!-- Pipe Graphic -->
    <rect x="50" y="110" width="360" height="65" rx="10" fill="url(#copperHealthy)"/>
    <ellipse cx="410" cy="142" rx="16" ry="32" fill="#E07A5F" stroke="#994411" stroke-width="2"/>

    <text x="50" y="225" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="700">Smooth Uniform Wall Thickness</text>
    <text x="50" y="250" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="13">Full diameter maintains normal 50-70 PSI household water pressure.</text>

    <g transform="translate(50, 280)">
      <circle cx="10" cy="10" r="5" fill="#10B981"/>
      <text x="25" y="14" fill="#CBD5E1" font-family="system-ui, sans-serif" font-size="13">No galvanic oxidation scale</text>
      <circle cx="10" cy="35" r="5" fill="#10B981"/>
      <text x="25" y="39" fill="#CBD5E1" font-family="system-ui, sans-serif" font-size="13">Zero acoustic turbulence signatures</text>
      <circle cx="10" cy="60" r="5" fill="#10B981"/>
      <text x="25" y="64" fill="#CBD5E1" font-family="system-ui, sans-serif" font-size="13">Uncompromised solder fitting joints</text>
    </g>
  </g>

  <!-- Right: Pitting Corrosion & Pinhole Breach -->
  <g transform="translate(640, 100)">
    <rect x="0" y="0" width="460" height="420" rx="20" fill="#0D1E36" stroke="#EF4444" stroke-width="2"/>
    <text x="35" y="45" fill="#EF4444" font-family="system-ui, sans-serif" font-size="14" font-weight="800" letter-spacing="1.5">STAGE B: PITTING CORROSION &amp; PINHOLE</text>
    <line x1="35" y1="62" x2="425" y2="62" stroke="#1E3E68" stroke-width="1.5"/>

    <!-- Corroded Pipe Graphic -->
    <rect x="50" y="110" width="360" height="65" rx="10" fill="url(#copperCorroded)"/>
    <ellipse cx="410" cy="142" rx="16" ry="32" fill="#2D5A5E" stroke="#1E3F42" stroke-width="2"/>

    <!-- Pinhole Leak Jet -->
    <circle cx="230" cy="110" r="4" fill="#FFFFFF"/>
    <path d="M230,110 Q240,70 270,55" fill="none" stroke="#38BDF8" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="270" cy="55" rx="16" ry="8" fill="#38BDF8" opacity="0.8"/>
    <text x="285" y="55" fill="#38BDF8" font-family="system-ui, sans-serif" font-size="12" font-weight="800">MICRO-JET SPRAY</text>

    <!-- Verdigris Crust Spots -->
    <ellipse cx="140" cy="135" rx="16" ry="8" fill="#10B981" opacity="0.9"/>
    <ellipse cx="190" cy="150" rx="20" ry="10" fill="#047857" opacity="0.8"/>
    <ellipse cx="320" cy="125" rx="24" ry="12" fill="#065F46" opacity="0.85"/>

    <text x="50" y="225" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="700">Pinhole Breach &amp; Verdigris Crusting</text>
    <text x="50" y="250" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="13">Chemical pitting thins pipe wall from inside-out until high pressure punctures.</text>

    <g transform="translate(50, 280)">
      <circle cx="10" cy="10" r="5" fill="#EF4444"/>
      <text x="25" y="14" fill="#CBD5E1" font-family="system-ui, sans-serif" font-size="13">Greenish-blue patina deposits visible</text>
      <circle cx="10" cy="35" r="5" fill="#EF4444"/>
      <text x="25" y="39" fill="#CBD5E1" font-family="system-ui, sans-serif" font-size="13">Loss of structural integrity over time</text>
      <circle cx="10" cy="60" r="5" fill="#EF4444"/>
      <text x="25" y="64" fill="#CBD5E1" font-family="system-ui, sans-serif" font-size="13">Demands immediate section replacement</text>
    </g>
  </g>

  <!-- Caption -->
  <rect x="100" y="585" width="1000" height="45" rx="12" fill="#050B16" fill-opacity="0.9"/>
  <text x="130" y="613" fill="#CBD5E1" font-family="system-ui, sans-serif" font-size="14" font-weight="500">
    Fig. 4: Copper supply line pitting corrosion progression leading to microscopic concealed pinhole breaches.
  </text>
</svg>`;

async function run() {
  await sharp(Buffer.from(featuredSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'hidden-plumbing-leak-detection.webp'));
  console.log('✓ Created hidden-plumbing-leak-detection.webp');

  await sharp(Buffer.from(waterMeterSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'water-meter-leak-detection-test.webp'));
  console.log('✓ Created water-meter-leak-detection-test.webp');

  await sharp(Buffer.from(moistureWallSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'wall-moisture-plumbing-leak-signs.webp'));
  console.log('✓ Created wall-moisture-plumbing-leak-signs.webp');

  await sharp(Buffer.from(pipeCorrosionSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'pipe-corrosion-pinhole-leak.webp'));
  console.log('✓ Created pipe-corrosion-pinhole-leak.webp');
}

run().catch(console.error);

