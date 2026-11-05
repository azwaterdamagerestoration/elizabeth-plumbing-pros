import React from "react";
import {
  Phone,
  AlertTriangle,
  Wrench,
  Flame,
  Droplets,
  ShieldAlert,
  Sparkles,
  MapPin,
  CheckCircle,
  CheckCircle2,
  ArrowRight,
  Clock,
  HelpCircle,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Timer,
  Gauge,
  AlertCircle,
  FileText,
  PhoneCall,
  Search,
  ExternalLink,
  Info,
  Zap,
  Thermometer,
  Shield,
  Activity,
  Layers,
  Settings,
  Waves,
  RefreshCw,
  Home,
  Check,
  BookOpen,
  Globe2,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Phone,
  AlertTriangle,
  Wrench,
  Flame,
  Droplets,
  ShieldAlert,
  Sparkles,
  MapPin,
  CheckCircle,
  CheckCircle2,
  ArrowRight,
  Clock,
  HelpCircle,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Timer,
  Gauge,
  AlertCircle,
  FileText,
  PhoneCall,
  Search,
  ExternalLink,
  Info,
  Zap,
  Thermometer,
  Shield,
  Activity,
  Layers,
  Settings,
  Waves,
  RefreshCw,
  Home,
  Check,
  BookOpen,
  Globe2,
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function DynamicIcon({ name, className = "w-5 h-5", size }: DynamicIconProps) {
  const IconComponent = iconMap[name] || Wrench;
  return <IconComponent className={className} size={size} />;
}

