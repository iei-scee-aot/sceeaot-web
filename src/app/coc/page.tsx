"use client";

import Divider2 from "@/components/ui/Divider2";
import Headlines from "@/components/ui/Headlines";
import {
  AlertTriangle,
  CheckCircle,
  Heart,
  Mail,
  Shield,
  Users,
} from "lucide-react";

const CodeOfConductPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 min-h-[46.9375rem] lg:min-h-[37.1875rem]">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden"></div>
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-12 lg:py-16">
          <div className="flex-1 justify-center align-middle text-center lg:text-left">
            <h1
              className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-tight tracking-tight"
              style={{ fontFamily: "KMR Apparat1" }}
            >
              <span className="text-primary">Code of Conduct</span>
              <br />
              <br />
            </h1>
            <h2
              className="text-[1.8rem] lg:text-[2.5rem] font-bold leading-tight tracking-tight"
              style={{ fontFamily: "KMR Apparat1" }}
            >
              Building a Safe & Inclusive Community
            </h2>
            <p className="mt-4 text-sm lg:text-lg font-light">
              Our community is built on respect, collaboration, and shared
              learning. This Code of Conduct ensures everyone can participate in
              a welcoming, harassment-free environment where innovation thrives.
            </p>

            {/* Quick Links */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center">
              <a href="#reporting" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-primary text-black px-6 py-3 rounded-lg font-bold text-sm lg:text-base hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 justify-center">
                  <AlertTriangle size={18} />
                  Report Issue
                </button>
              </a>
              <a href="#guidelines" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-primary text-primary px-6 py-3 rounded-lg font-bold text-sm lg:text-base hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 justify-center">
                  <CheckCircle size={18} />
                  View Guidelines
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Divider2 />

      {/* Our Commitment */}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
          <Headlines headLine="Our Commitment" />
        </div>
        <div className="px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="text-primary" size={48} />
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "KMR Apparat1" }}
              >
                Safe Environment
              </h3>
              <p className="text-sm lg:text-base text-gray-300">
                We are committed to providing a harassment-free experience for
                everyone, regardless of background, identity, or experience
                level.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="text-primary" size={48} />
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "KMR Apparat1" }}
              >
                Inclusive Community
              </h3>
              <p className="text-sm lg:text-base text-gray-300">
                We welcome participants from all backgrounds and encourage
                diverse perspectives that strengthen our engineering community.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Heart className="text-primary" size={48} />
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "KMR Apparat1" }}
              >
                Mutual Respect
              </h3>
              <p className="text-sm lg:text-base text-gray-300">
                We treat all community members with respect, kindness, and
                empathy, fostering an environment where everyone can learn and
                grow.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider2 />

      {/* Community Guidelines */}
      <div
        id="guidelines"
        className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0"
      >
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
          <Headlines headLine="Community Guidelines" />
        </div>
        <div className="px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Expected Behavior */}
            <div>
              <h3
                className="text-2xl font-bold mb-6 text-primary"
                style={{ fontFamily: "KMR Apparat1" }}
              >
                ✅ Expected Behavior
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-sm lg:text-base">
                    <strong>Be respectful and inclusive:</strong> Use welcoming
                    language and respect different viewpoints and experiences.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-sm lg:text-base">
                    <strong>Collaborate constructively:</strong> Provide helpful
                    feedback, ask questions respectfully, and share knowledge
                    openly.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-sm lg:text-base">
                    <strong>Support learning:</strong> Help newcomers, share
                    resources, and encourage skill development at all levels.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-sm lg:text-base">
                    <strong>Respect boundaries:</strong> Honor personal
                    boundaries and consent in all interactions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-sm lg:text-base">
                    <strong>Give credit:</strong> Acknowledge others'
                    contributions and respect intellectual property.
                  </span>
                </li>
              </ul>
            </div>

            {/* Unacceptable Behavior */}
            <div>
              <h3
                className="text-2xl font-bold mb-6 text-red-500"
                style={{ fontFamily: "KMR Apparat1" }}
              >
                ❌ Unacceptable Behavior
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertTriangle
                    className="text-red-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-sm lg:text-base">
                    <strong>Harassment or discrimination:</strong> Based on
                    race, gender, sexuality, religion, disability, or any
                    personal characteristic.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle
                    className="text-red-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-sm lg:text-base">
                    <strong>Abusive language:</strong> Trolling, insulting
                    comments, personal attacks, or inflammatory language.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle
                    className="text-red-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-sm lg:text-base">
                    <strong>Unwelcome advances:</strong> Inappropriate sexual
                    attention, advances, or content.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle
                    className="text-red-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-sm lg:text-base">
                    <strong>Spam or self-promotion:</strong> Excessive
                    promotional content, spam, or off-topic discussions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle
                    className="text-red-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-sm lg:text-base">
                    <strong>Privacy violations:</strong> Sharing personal
                    information without consent or doxxing.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Divider2 />

      {/* Scope and Enforcement */}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
          <Headlines headLine="Scope & Enforcement" />
        </div>
        <div className="px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3
                className="text-xl font-bold mb-4 text-primary"
                style={{ fontFamily: "KMR Apparat1" }}
              >
                Where This Applies
              </h3>
              <p className="text-sm lg:text-base mb-4 text-gray-300">
                This Code of Conduct applies to all SCEE community spaces,
                including:
              </p>
              <ul className="space-y-2 text-sm lg:text-base text-gray-300">
                <li>• Discord servers and online forums</li>
                <li>• Events, workshops, and competitions</li>
                <li>• GitHub repositories and code collaborations</li>
                <li>• Social media interactions representing SCEE</li>
                <li>• Any space where you represent the SCEE community</li>
              </ul>
            </div>
            <div>
              <h3
                className="text-xl font-bold mb-4 text-primary"
                style={{ fontFamily: "KMR Apparat1" }}
              >
                Enforcement Actions
              </h3>
              <p className="text-sm lg:text-base mb-4 text-gray-300">
                Violations may result in the following actions:
              </p>
              <ul className="space-y-2 text-sm lg:text-base text-gray-300">
                <li>
                  • <strong>Warning:</strong> Private discussion about the
                  behavior
                </li>
                <li>
                  • <strong>Temporary Ban:</strong> Time-limited removal from
                  community spaces
                </li>
                <li>
                  • <strong>Permanent Ban:</strong> Indefinite removal from all
                  community spaces
                </li>
                <li>
                  • <strong>Event Removal:</strong> Removal from current or
                  future events
                </li>
                <li>
                  • <strong>Legal Action:</strong> In cases involving illegal
                  activities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Divider2 />

      {/* Reporting */}
      <div
        id="reporting"
        className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0"
      >
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
          <Headlines headLine="Reporting Violations" />
        </div>
        <div className="px-4 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "KMR Apparat1" }}
              >
                Have you witnessed or experienced a violation?
              </h3>
              <p className="text-sm lg:text-base text-gray-300">
                We take all reports seriously and will investigate promptly and
                confidentially.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="text-primary" size={24} />
                  <h4
                    className="text-xl font-bold"
                    style={{ fontFamily: "KMR Apparat1" }}
                  >
                    Email Report
                  </h4>
                </div>
                <p className="text-sm lg:text-base text-gray-300 mb-4">
                  Send a detailed report to our community moderators:
                </p>
                <a
                  href="mailto:sceeaot@gmail.com"
                  className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all duration-300"
                >
                  <Mail size={18} />
                  sceeaot@gmail.com
                </a>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-primary" size={24} />
                  <h4
                    className="text-xl font-bold"
                    style={{ fontFamily: "KMR Apparat1" }}
                  >
                    Community Leaders
                  </h4>
                </div>
                <p className="text-sm lg:text-base text-gray-300 mb-4">
                  Contact any of our community leaders directly:
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Faculty Advisors</li>
                  <li>• Event Organizers</li>
                  <li>• Discord Moderators</li>
                  <li>• Student Representatives</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
              <h4 className="text-lg font-bold mb-2 text-primary">
                What to include in your report:
              </h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Description of what happened</li>
                <li>• When and where it occurred</li>
                <li>• Who was involved (if comfortable sharing)</li>
                <li>• Any evidence (screenshots, messages, etc.)</li>
                <li>• How you would like us to respond</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Divider2 />

      {/* Acknowledgment */}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
          <Headlines headLine="Acknowledgment" />
        </div>
        <div className="px-4 lg:px-8 py-12 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
              This Code of Conduct is adapted from the{" "}
              <a
                href="https://www.contributor-covenant.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline"
              >
                Contributor Covenant
              </a>
              , version 2.1, and incorporates best practices from leading tech
              communities. It reflects our commitment to fostering an inclusive
              environment where all members can contribute, learn, and grow
              together.
            </p>
            <div className="mt-8">
              <p className="text-xs text-gray-500">
                Last updated: August 2025 | Version 1.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeOfConductPage;
