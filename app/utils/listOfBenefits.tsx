import {
    Briefcase,
    Users,
    Zap,
    Eye,
    SmileIcon as Tooth,
    Heart,
    Umbrella,
    Clock,
    Calendar,
    Building,
    GraduationCap,
    Dumbbell,
    Brain,
    Home,
    Bitcoin,
    UserCircle,
    PieChart,
    Coins,
    MonitorOff,
    Shield,
    UserPlus,
  } from "lucide-react";
  
  interface Benefit {
    id: string;
    label: string;
    icon: React.ReactNode;
  }
  
  export const benefits: Benefit[] = [
    { id: "401k", label: "401(k) Retirement Plan", icon: <Briefcase className="w-3 h-3" /> },
    { id: "401k_matching", label: "401(k) Employer Matching", icon: <Coins className="w-3 h-3" /> },
    { id: "distributed", label: "Remote-First Culture", icon: <Users className="w-3 h-3" /> },
    { id: "async", label: "Asynchronous Work Environment", icon: <Zap className="w-3 h-3" /> },
    { id: "vision", label: "Vision Insurance", icon: <Eye className="w-3 h-3" /> },
    { id: "dental", label: "Dental Insurance", icon: <Tooth className="w-3 h-3" /> },
    { id: "medical", label: "Comprehensive Health Insurance", icon: <Heart className="w-3 h-3" /> },
    { id: "unlimited_vacation", label: "Unlimited Paid Time Off (PTO)", icon: <Umbrella className="w-3 h-3" /> },
    { id: "pto", label: "Generous Paid Time Off", icon: <Clock className="w-3 h-3" /> },
    { id: "four_day", label: "4-Day Workweek Option", icon: <Calendar className="w-3 h-3" /> },
    { id: "company_retreats", label: "Annual Company Retreats", icon: <Building className="w-3 h-3" /> },
    { id: "coworking_budget", label: "Coworking Space Reimbursement", icon: <Building className="w-3 h-3" /> },
    { id: "learning_budget", label: "Annual Learning & Development Budget", icon: <GraduationCap className="w-3 h-3" /> },
    { id: "gym", label: "Free Gym Membership", icon: <Dumbbell className="w-3 h-3" /> },
    { id: "mental_wellness", label: "Mental Health & Wellness Support", icon: <Brain className="w-3 h-3" /> },
    { id: "home_office", label: "Home Office Setup Stipend", icon: <Home className="w-3 h-3" /> },
    { id: "crypto", label: "Salary Payments in Cryptocurrency", icon: <Bitcoin className="w-3 h-3" /> },
    { id: "pseudonymous", label: "Work Pseudonymously", icon: <UserCircle className="w-3 h-3" /> },
    { id: "profit_sharing", label: "Performance-Based Profit Sharing", icon: <PieChart className="w-3 h-3" /> },
    { id: "equity", label: "Stock Options & Equity Compensation", icon: <Coins className="w-3 h-3" /> },
    { id: "no_whiteboard", label: "No Whiteboard Interviews", icon: <MonitorOff className="w-3 h-3" /> },
    { id: "no_monitoring", label: "No Employee Monitoring Tools", icon: <Shield className="w-3 h-3" /> },
    { id: "hire_old_young", label: "Inclusive Hiring (All Ages Welcome)", icon: <UserPlus className="w-3 h-3" /> },
];
