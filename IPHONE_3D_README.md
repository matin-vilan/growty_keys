# iPhone 3D Model Integration

This project includes a 3D iPhone model component that can be displayed using Three.js and React Three Fiber.

## Installation

To use the 3D iPhone model, you need to install the following dependencies:

```bash
npm install three @react-three/fiber @react-three/drei
```

## Usage

The iPhone3D component is already integrated into the main page. It will automatically:

1. **Show the 3D model** if Three.js dependencies are installed
2. **Show a fallback component** if dependencies are not available

## Features

### iPhone3D Component Props

```tsx
interface iPhone3DProps {
  className?: string;
  position?: [number, number, number]; // 3D position
  rotation?: [number, number, number]; // 3D rotation
  scale?: number; // Scale factor
  autoRotate?: boolean; // Auto rotation
  enableZoom?: boolean; // Enable zoom controls
  enablePan?: boolean; // Enable pan controls
}
```

### Example Usage

```tsx
import iPhone3D from "@/shared/components/molecules/iPhone3D";

// Basic usage
<iPhone3D />

// Custom configuration
<iPhone3D
  position={[0, 0, 0]}
  rotation={[0, 0, 0]}
  scale={1.2}
  autoRotate={true}
  enableZoom={true}
  enablePan={false}
/>
```

## 3D Model Features

- **Realistic Lighting**: Ambient, directional, and point lights
- **Shadows**: Contact shadows for realistic ground interaction
- **Environment**: Studio environment for better reflections
- **Controls**: Orbit controls for user interaction
- **Auto Rotation**: Smooth automatic rotation
- **Performance**: Optimized rendering settings

## File Structure

```
src/shared/components/molecules/iPhone3D/
├── index.tsx          # Main component
└── Fallback.tsx       # Fallback component
```

## Model Location

The 3D model files are located in:

```
public/iphone16/
├── 1b338ec19f15ad72904b (1).gltf  # Main GLTF model
└── *.bin files                     # Binary data files
```

## Troubleshooting

1. **Model not loading**: Check if the GLTF file path is correct
2. **Performance issues**: Reduce scale or disable shadows
3. **Dependencies missing**: Install Three.js packages
4. **Fallback showing**: Run `npm install three @react-three/fiber @react-three/drei`
