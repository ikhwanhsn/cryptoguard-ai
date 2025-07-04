"use client";

import React, { useState, useEffect } from "react";
import {
  Shield,
  TrendingUp,
  Eye,
  Zap,
  DollarSign,
  AlertTriangle,
  BarChart3,
  Brain,
  Lock,
  Globe,
  ChevronRight,
  Play,
  CheckCircle,
  ArrowRight,
  Target,
  Layers,
  Activity,
} from "lucide-react";

const CryptoGuardLanding = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Anomaly Detection",
      description:
        "AI-powered detection of suspicious patterns and unusual transaction behaviors across multiple blockchains.",
      metric: "99.7% Accuracy",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Whale Movement Tracking",
      description:
        "Real-time monitoring of large-scale crypto movements and institutional wallet activities.",
      metric: "$100M+ Tracked",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Smart Contract Analysis",
      description:
        "Deep analysis of smart contract interactions and potential security vulnerabilities.",
      metric: "50K+ Contracts",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Market Intelligence",
      description:
        "Advanced analytics providing insights into market trends and trading patterns.",
      metric: "Real-time Data",
    },
  ];

  const stats = [
    {
      value: "500M+",
      label: "Transactions Analyzed",
      icon: <Activity className="w-5 h-5" />,
    },
    {
      value: "15+",
      label: "Blockchains Monitored",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      value: "99.7%",
      label: "Detection Accuracy",
      icon: <Target className="w-5 h-5" />,
    },
    {
      value: "24/7",
      label: "Real-time Monitoring",
      icon: <Zap className="w-5 h-5" />,
    },
  ];

  const useCases = [
    {
      title: "DeFi Protocol Security",
      description:
        "Protect your protocol from flash loans, arbitrage attacks, and suspicious activities.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Institutional Trading",
      description:
        "Get early warnings on large movements and market-moving transactions.",
      icon: <DollarSign className="w-8 h-8" />,
    },
    {
      title: "Compliance & AML",
      description:
        "Ensure regulatory compliance with advanced transaction monitoring.",
      icon: <Lock className="w-8 h-8" />,
    },
    {
      title: "Portfolio Management",
      description:
        "Track and analyze your crypto portfolio with AI-powered insights.",
      icon: <Layers className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8">
            <Brain className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-sm font-medium">
              AI-Powered Crypto Intelligence
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
            CryptoGuard AI
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI agent that monitors blockchain activity, detects
            anomalies, and provides real-time intelligence on crypto market
            movements
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              <Play className="w-5 h-5 inline mr-2" />
              Watch Demo
            </button>
            <button className="border-2 border-purple-500 hover:bg-purple-500/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Request Early Access
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-cyan-400 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Advanced AI Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Powered by cutting-edge machine learning algorithms trained on
            billions of blockchain transactions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:from-white/20 hover:to-white/10 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                activeFeature === index ? "ring-2 ring-cyan-500" : ""
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="text-cyan-400 mb-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 w-12 h-12 rounded-xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className="text-cyan-400 font-semibold text-sm">
                {feature.metric}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Built for Every Use Case
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From DeFi protocols to institutional trading, CryptoGuard AI adapts
            to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:from-white/15 hover:to-white/10 transition-all duration-300 group"
            >
              <div className="text-purple-400 mb-4 group-hover:scale-[1.01] transition-transform duration-300">
                {useCase.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Section */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border border-white/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            See CryptoGuard in Action
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-driven blockchain intelligence with our
            interactive demo
          </p>

          <div className="bg-black/30 rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              </div>
              <div className="text-sm text-gray-400">
                CryptoGuard AI Dashboard
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 p-4 rounded-lg border border-red-500/30">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 mr-2" />
                  <span className="text-sm font-medium text-red-300">
                    ANOMALY DETECTED
                  </span>
                </div>
                <div className="text-xs text-gray-300">
                  Unusual transaction pattern on Ethereum
                </div>
                <div className="text-lg font-bold text-red-300">
                  $2.3M Transfer
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 p-4 rounded-lg border border-yellow-500/30">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-sm font-medium text-yellow-300">
                    WHALE ALERT
                  </span>
                </div>
                <div className="text-xs text-gray-300">
                  Large BTC movement detected
                </div>
                <div className="text-lg font-bold text-yellow-300">
                  1,247 BTC
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-4 rounded-lg border border-green-500/30">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-sm font-medium text-green-300">
                    ANALYSIS COMPLETE
                  </span>
                </div>
                <div className="text-xs text-gray-300">
                  Smart contract audit finished
                </div>
                <div className="text-lg font-bold text-green-300">Safe</div>
              </div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
            <Play className="w-5 h-5 inline mr-2" />
            Launch Interactive Demo
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Ready to Transform Your Crypto Intelligence?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the future of blockchain monitoring and get early access to
            CryptoGuard AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              Get Early Access
              <ChevronRight className="w-5 h-5 inline ml-2" />
            </button>
            <button className="border-2 border-purple-500 hover:bg-purple-500/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-cyan-400 mr-3" />
              <span className="text-2xl font-bold">CryptoGuard AI</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered blockchain intelligence for the next generation of
              crypto security
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              © 2025 CryptoGuard AI. Built for hackathon submission.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CryptoGuardLanding;
