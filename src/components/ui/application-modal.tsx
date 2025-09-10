import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  internshipTitle: string;
}

export function ApplicationModal({ open, onOpenChange, internshipTitle }: ApplicationModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    skills: "",
    interests: "",
    qualifications: "",
    shortNote: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Application Submitted Successfully!",
      description: `Your application for ${internshipTitle} has been submitted. You will receive updates via email.`,
    });
    
    // Reset form
    setFormData({
      name: "",
      dateOfBirth: "",
      skills: "",
      interests: "",
      qualifications: "",
      shortNote: ""
    });
    
    onOpenChange(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-primary">
            Apply for Internship
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {internshipTitle}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                required
                className="modern-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth" className="text-sm font-medium">
                Date of Birth *
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                required
                className="modern-input"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills" className="text-sm font-medium">
              Skills *
            </Label>
            <Textarea
              id="skills"
              value={formData.skills}
              onChange={(e) => handleInputChange("skills", e.target.value)}
              placeholder="List your relevant skills (e.g., Programming, Data Analysis, Communication)"
              required
              className="min-h-[80px] modern-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interests" className="text-sm font-medium">
              Interests *
            </Label>
            <Textarea
              id="interests"
              value={formData.interests}
              onChange={(e) => handleInputChange("interests", e.target.value)}
              placeholder="Describe your interests and career goals"
              required
              className="min-h-[80px] modern-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="qualifications" className="text-sm font-medium">
              Educational Qualifications *
            </Label>
            <Textarea
              id="qualifications"
              value={formData.qualifications}
              onChange={(e) => handleInputChange("qualifications", e.target.value)}
              placeholder="List your educational background, degree, institution, etc."
              required
              className="min-h-[80px] modern-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="shortNote" className="text-sm font-medium">
              Why are you interested in this internship? *
            </Label>
            <Textarea
              id="shortNote"
              value={formData.shortNote}
              onChange={(e) => handleInputChange("shortNote", e.target.value)}
              placeholder="Tell us why you're interested in this opportunity and what you hope to achieve"
              required
              className="min-h-[100px] modern-input"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 btn-primary-hover"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}