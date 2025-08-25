'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
// import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User, Package, Settings, LogOut } from 'lucide-react'
import { toast } from 'sonner'

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  })

  useEffect(() => {
    const getUser = async () => {
      // Mock user authentication - in production, check actual auth state
      const mockUser = {
        id: 'mock-user-id',
        email: 'john.doe@example.com',
        user_metadata: {
          full_name: 'John Doe'
        }
      }
      
      setUser(mockUser)
      setProfile(prev => ({
        ...prev,
        email: mockUser.email || '',
        fullName: mockUser.user_metadata?.full_name || ''
      }))
      setIsLoading(false)
    }

    getUser()
  }, [router])

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)

    try {
      // Mock profile update - simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In production, this would make an actual API call to update user profile
      console.log('Profile updated:', profile)

      toast.success('Profile updated successfully!')
    } catch (error: any) {
      toast.error('Failed to update profile')
    } finally {
      setIsUpdating(false)
    }
  }

  const handleSignOut = async () => {
    // Mock sign out - in production, clear actual auth state
    toast.success('Signed out successfully!')
    router.push('/')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
        <Button onClick={handleSignOut} variant="outline">
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="profile" className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center space-x-2">
            <Package className="h-4 w-4" />
            <span>Orders</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdateProfile} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={profile.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={profile.email}
                      disabled
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={profile.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={profile.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={profile.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      name="state"
                      value={profile.state}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={profile.zipCode}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <Button type="submit" disabled={isUpdating}>
                  {isUpdating ? 'Updating...' : 'Update Profile'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Package className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders yet</h3>
                <p className="text-gray-600 mb-4">Start shopping to see your order history here</p>
                <Button onClick={() => router.push('/products')}>
                  Browse Products
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email Preferences</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Manage your email notification preferences
                  </p>
                  <Button variant="outline">Manage Email Settings</Button>
                </div>
                
                <hr />
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Password</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Change your account password
                  </p>
                  <Button variant="outline">Change Password</Button>
                </div>
                
                <hr />
                
                <div>
                  <h3 className="font-semibold text-red-600 mb-2">Danger Zone</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Permanently delete your account and all associated data
                  </p>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}